import { useHistory } from 'react-router-dom'
import { HistoryPushType, HistoryRouteMap } from 'ApiState'

const historyRouteMap: HistoryRouteMap = {
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/',
}

const useHistoryPusher = (): ((pushType: HistoryPushType) => void) => {
  const history = useHistory()
  const { pathname } = history.location

  return (pushType: HistoryPushType) => {
    const targetPath = historyRouteMap[pushType]
    if (targetPath === pathname) return
    history.push(historyRouteMap[pushType])
  }
}

export default useHistoryPusher
