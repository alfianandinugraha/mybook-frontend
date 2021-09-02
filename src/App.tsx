import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { Container } from '@material-ui/core'
import Home from '@/pages/Home'

const App = (): React.ReactElement => (
  <Container maxWidth="md">
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Container>
)

export default App
