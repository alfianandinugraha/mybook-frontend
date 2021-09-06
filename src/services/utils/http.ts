import axios, { AxiosResponse } from 'axios'
import CookieService from '@/services/utils/cookie'
import AuthService from '@/services/http/auth'

const httpAuth = axios.create({
  baseURL: 'http://localhost:5500/api/auth/',
})

const http = axios.create({
  baseURL: 'http://localhost:5000/api/',
})
http.interceptors.request.use((config) => {
  const newConfig = { ...config }
  newConfig.headers.Authorization = `bearer ${CookieService.getAccessToken()}`
  return newConfig
})
// reference : https://thedutchlab.com/blog/using-axios-interceptors-for-refreshing-your-api-token
http.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (axiosErr) => {
    const refreshToken = CookieService.getRefreshToken()

    if (!refreshToken) return Promise.reject(axiosErr)

    try {
      const newConfig = { ...axiosErr.config }
      if (!newConfig._retry) {
        newConfig._retry = true
        await AuthService.requestAccessToken()
        return await http(newConfig)
      }
    } catch (err) {
      return Promise.reject(err)
    }
    return Promise.reject(axiosErr)
  }
)

const HttpService = {
  ...http,
  auth: httpAuth,
}

export default HttpService
