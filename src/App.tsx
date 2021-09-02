import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import { Container } from '@material-ui/core'

const App = (): React.ReactElement => (
  <Container>
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  </Container>
)

export default App
