declare module 'ApiState' {
  export interface InputState {
    value: string
    errorMessage: string
  }

  export type HistoryPushType = 'LOGIN' | 'REGISTER' | 'HOME'

  type HistoryRouteMap = {
    [K in HistoryPushType]: string
  }
}
