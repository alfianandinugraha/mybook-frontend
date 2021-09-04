import { ApiResponse, LoginBody, LoginData } from 'HTTPApi'
import CookieService from '@/services/utils/cookie'
import HttpService from '@/services/utils/http'

const login = async (email: string, password: string): Promise<void> => {
  try {
    const loginBody: LoginBody = { email, password }
    const { data } = await HttpService.auth.post<ApiResponse<LoginData>>(
      'login',
      loginBody
    )
    const { accessToken, refreshToken } = data.data
    CookieService.setToken(accessToken, refreshToken)
  } catch (err) {
    console.error(err)
    throw new Error('Login failed')
  }
}

const AuthService = {
  login,
}

export default AuthService
