import { ElectronAPI } from '@electron-toolkit/preload'
import { MakeFetch } from '@shared/types'
declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      makeFetch: MakeFetch
    }
  }
}
