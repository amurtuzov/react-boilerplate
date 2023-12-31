import { useEffect, useRef, useState } from 'react'
import { AxiosError } from 'axios'
import { CamelizeKeys } from '@/types/camelCaseProperties.ts'
import { HTTPError } from '@/types/httpError.ts'
import { adaptParamsToServer } from '@/helpers/adaptParamsToServer.ts'
import { adaptResponseForClient } from '@/helpers/adaptResponseForClient.ts'
import { isEqual } from 'lodash'
let abortController: AbortController | null = null

// When you need to call the API based on an event (for example click), we use [externalCall = true] and pass the
// parameters directly to the returned function (executeApiCall).
//
// If you need to call the API when loading the page, use [externalCall = false], the function accesses the API
// with predefined parameters (params argument), the parameters must be initialized via useState in functional component,
// during subsequent API call for example, when changing parameters (infinity scrolling), you need to change the parameters via setState.

export default function useFetch<T, K, V>(
  apiCallFunction: (
    params?: V,
    abortController?: AbortController,
  ) => Promise<T>,
  externalCall = false,
  params: V | null = null,
) {
  const [data, setData] = useState<CamelizeKeys<T> | null>(null)
  const [error, setError] = useState<HTTPError<CamelizeKeys<K>> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const prevParams = useRef<V | null | undefined>()

  const executeApiCall = async (externalParams: V | null = null) => {
    const apiCallParams = externalParams || params
    if (isEqual(prevParams.current, apiCallParams)) return
    prevParams.current = apiCallParams
    setData(null)
    setError(null)
    setLoading(true)
    try {
      abortController?.abort()
      abortController = new AbortController()
      const response = await apiCallFunction(
        adaptParamsToServer<V>(apiCallParams),
        abortController,
      )
      setData(adaptResponseForClient<T>(response))
      setLoading(false)
      abortController = null
    } catch (e: unknown) {
      setLoading(false)
      const axiosError = e as AxiosError<K>
      const status = axiosError.response?.status
      const response = axiosError.response
      if (response) {
        setError({ status, data: adaptResponseForClient<K>(response.data) })
      }
      abortController = null
      if (externalCall) {
        throw new Error('Error for external call catch')
      }
    } finally {
      setLoading(false)
      abortController = null
    }
  }
  const effectApiCall = executeApiCall

  useEffect(() => {
    if (!externalCall) {
      effectApiCall(adaptParamsToServer<V>(params))
    }
  }, [params, effectApiCall, externalCall])

  return { loading, data, error, executeApiCall }
}
