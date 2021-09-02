import React, { useState } from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { InputState } from 'ApiState'

const useClasses = makeStyles(() => ({
  textField: {
    marginBottom: '1rem',
  },
}))

const Login = (): React.ReactElement => {
  const [email, setEmail] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const [password, setPassword] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const classes = useClasses()

  const submitForm = () => {
    console.log(email, password)
  }

  return (
    <Grid container direction="column" style={{ width: '25%' }}>
      <Grid item>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Email"
          placeholder="your@email.com"
          type="email"
          error={!!email.errorMessage}
          helperText={email.errorMessage}
          className={classes.textField}
          value={email.value}
          onChange={(e) => {
            setEmail({
              ...email,
              value: e.target.value,
            })
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Password"
          placeholder="********"
          type="password"
          error={!!password.errorMessage}
          helperText={password.errorMessage}
          className={classes.textField}
          value={password.value}
          onChange={(e) => {
            setPassword({
              ...email,
              value: e.target.value,
            })
          }}
        />
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item style={{ marginRight: '1rem' }}>
            <Button color="primary" variant="contained" onClick={submitForm}>
              Login
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ cursor: 'pointer' }}>Register</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
