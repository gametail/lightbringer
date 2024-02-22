import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('api', {
    greet: (message) => ipcRenderer.send('greet', message),
    makeFetch: (axiosFunction: (config: AxiosRequestConfig) => Promise<AxiosResponse>) =>
      ipcRenderer.invoke('fetch', axiosFunction)
  })
} catch (error) {
  console.error(error)
}
