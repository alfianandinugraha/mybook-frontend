declare module 'ApiState' {
  export interface InputState {
    id?: string
    value: string
    errorMessage: string
  }

  export type HistoryPushType = 'LOGIN' | 'REGISTER' | 'HOME'

  type HistoryRouteMap = {
    [K in HistoryPushType]: string
  }

  export interface Book {
    id: string
    userId: string
    title: string
    description: string
    authors: string[]
  }
}
