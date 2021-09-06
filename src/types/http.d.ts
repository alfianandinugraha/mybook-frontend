declare module 'HTTPApi' {
  import { Book } from 'ApiState'

  export interface ApiResponse<T> {
    message: string
    data: T
  }

  export interface LoginBody {
    email: string
    password: string
  }

  export interface RegisterBody extends LoginBody {
    name: string
  }

  export interface LoginData {
    accessToken: string
    refreshToken: string
  }

  export interface RegisterData extends LoginData {}

  export interface UserData {
    id: string
    name: string
    email: string
  }

  export interface BookBody {
    title: string
    description: string
    authors: string[]
  }

  export interface BookData extends Book {}
}
