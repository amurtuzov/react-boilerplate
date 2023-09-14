import axios from 'axios'
import { ActionList } from '@/types/httpResponse.ts'

const getDataExample = async (
  params?: any,
  abortController?: AbortController,
): Promise<ActionList<any>> => {
  const { data } = await axios.get('/example/', {
    params,
    signal: abortController?.signal,
  })
  return data
}

export { getDataExample }
