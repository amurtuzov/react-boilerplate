import axios from 'axios'

axios.interceptors.request.use((config) => {
  if (config && config.headers) {
    config.baseURL = import.meta.env.VITE_API_BASE_URL
  }
  return config
})
