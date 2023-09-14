export type HTTPError<T> = {
  status?: number
  data: T
}

export type DefaultError = {
  errors: {
    date: string[]
    otherAttribute: string[]
  }
}
