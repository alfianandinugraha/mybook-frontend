import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'
import UserService from '@/services/http/user'
import { Typography } from '@material-ui/core'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface GuardProps {
  children: React.ReactNode
  protected?: boolean
}

interface RouteGuardProps extends RouteProps {
  protected?: boolean
}

const Guard = (props: GuardProps): React.ReactElement => {
  const [user, setUser] = useAtom(userAtom)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    setIsFetching(true)
    const fetchUser = async () => {
      try {
        const { data } = await UserService.currentUser()
        setUser(data)
      } catch (err) {
        setUser(null)
      } finally {
        setIsFetching(false)
      }
    }

    fetchUser()
  }, [])

  if (isFetching) return <Typography>Fetching</Typography>

  if (!props.protected && user) return <Redirect to="/" />

  if (props.protected && !user) return <Redirect to="/login" />

  return <>{props.children}</>
}

const RouteGuard = (props: RouteGuardProps): React.ReactElement => {
  return (
    <Route {...props}>
      <Guard protected={props.protected}>{props.children}</Guard>
    </Route>
  )
}

export { RouteGuard }
export default Guard
