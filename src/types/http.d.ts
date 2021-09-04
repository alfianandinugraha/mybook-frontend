declare module 'HTTPApi' {
  export interface ApiResponse<T> {
    message: string
    data: T
  }

  export interface LoginBody {
    email: string
    password: string
  }

  export interface LoginData {
    accessToken: string
    refreshToken: string
  }
}
