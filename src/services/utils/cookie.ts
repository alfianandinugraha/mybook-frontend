import Cookie from 'js-cookie'

const ACCESS_TOKEN = 'access-token'
const REFRESH_TOKEN = 'refresh-token'

const getAccessToken = (): string | null => {
  const token = Cookie.get(ACCESS_TOKEN)
  return !token ? null : token
}

const setAccessToken = (accessToken: string): void => {
  Cookie.set(ACCESS_TOKEN, accessToken)
}

const getRefreshToken = (): string | null => {
  const token = Cookie.get(REFRESH_TOKEN)
  return !token ? null : token
}

const setRefreshToken = (refreshToken: string): void => {
  Cookie.set(REFRESH_TOKEN, refreshToken)
}

const setToken = (accessToken: string, refreshToken: string): void => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
}

const CookieService = {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  setToken,
}

export default CookieService
