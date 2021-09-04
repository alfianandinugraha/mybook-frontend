import {
  ApiResponse,
  LoginBody,
  LoginData,
  RegisterBody,
  RegisterData,
} from 'HTTPApi'
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
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const register = async (body: RegisterBody): Promise<void> => {
  try {
    const { data } = await HttpService.auth.post<ApiResponse<RegisterData>>(
      '/register',
      body
    )
    const { accessToken, refreshToken } = data.data
    CookieService.setToken(accessToken, refreshToken)
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const AuthService = {
  login,
  register,
}

export default AuthService
