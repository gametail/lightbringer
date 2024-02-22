import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type MakeFetch = (
  config: AxiosRequestConfig
) => Promise<Pick<AxiosResponse<unknown>, 'status' | 'data' | 'statusText'>>
