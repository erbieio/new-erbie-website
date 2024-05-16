import axios from 'axios'
import promiseFinally from 'promise.prototype.finally'

promiseFinally.shim()

export const service = axios.create({
  // Set the baseur address. If you cross domains through proxy, you can directly fill in the base address
  baseURL: '',
  // Define unified request headers
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  // Configure request timeout
  timeout: 60000
})
// Request interception
service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status == 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
