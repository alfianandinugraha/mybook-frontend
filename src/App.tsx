import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { Container } from '@material-ui/core'
import Home from '@/pages/Home'
import { RouteGuard } from '@/hoc/Guard'

const App = (): React.ReactElement => {
  return (
    <Container maxWidth="md">
      <Switch>
        <RouteGuard path="/login" exact>
          <Login />
        </RouteGuard>
        <RouteGuard path="/register" exact>
          <Register />
        </RouteGuard>
        <RouteGuard protected path="/" exact>
          <Home />
        </RouteGuard>
      </Switch>
    </Container>
  )
}

export default App
