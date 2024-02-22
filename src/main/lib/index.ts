import { MakeFetch } from '@shared/types'
import axios from 'axios'

export const makeFetch: MakeFetch = async (config) => {
  config.headers = {
    'X-Riot-Token': import.meta.env.MAIN_VITE_LEAGUE_DEV_API_KEY
  }

  const response = await axios(config)

  console.log(response.data)

  return {
    status: response.status,
    statusText: response.statusText,
    data: response.data
  }
}
