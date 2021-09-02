import React, { useState } from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import useHistoryPusher from '@/hooks/useHistoryPusher'
import { InputState } from 'ApiState'
import isEmail from 'validator/lib/isEmail'

const useClasses = makeStyles(() => ({
  textField: {
    marginBottom: '1rem',
  },
}))

const Register = (): React.ReactElement => {
  const [fullname, setFullname] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const [email, setEmail] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const [password, setPassword] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const [rePassword, setRePassword] = useState<InputState>({
    value: '',
    errorMessage: '',
  })
  const push = useHistoryPusher()
  const classes = useClasses()

  const inputFullnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const payload = {
      value,
      errorMessage: '',
    }
    if (!value) payload.errorMessage = 'Please fill this input'
    setFullname(payload)
  }

  const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const isValidEmail = isEmail(value)
    const payload = {
      value,
      errorMessage: '',
    }
    if (!isValidEmail) payload.errorMessage = 'Please input email correctly'
    if (!value) payload.errorMessage = 'Please fill this input'
    setEmail(payload)
  }

  const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword({
      ...password,
      value,
    })
  }

  const inputRePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setRePassword({
      ...rePassword,
      value,
    })
  }

  const submitFormRegisterHandler = () => {
    console.log({ fullname, email, password, rePassword })
  }

  return (
    <Grid container direction="column" style={{ width: '25%' }}>
      <Grid item>
        <Typography variant="h4">Register</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Fullname"
          placeholder="Your full name"
          type="text"
          className={classes.textField}
          error={!!fullname.errorMessage}
          helperText={fullname.errorMessage}
          value={fullname.value}
          onChange={inputFullnameHandler}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Email"
          placeholder="your@email.com"
          type="email"
          className={classes.textField}
          error={!!email.errorMessage}
          helperText={email.errorMessage}
          value={email.value}
          onChange={inputEmailHandler}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Password"
          placeholder="********"
          type="password"
          className={classes.textField}
          error={!!password.errorMessage}
          helperText={password.errorMessage}
          value={password.value}
          onChange={inputPasswordHandler}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Re-Password"
          placeholder="********"
          type="password"
          className={classes.textField}
          error={!!rePassword.errorMessage}
          helperText={rePassword.errorMessage}
          value={rePassword.value}
          onChange={inputRePasswordHandler}
        />
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item style={{ marginRight: '1rem' }}>
            <Button
              color="primary"
              variant="contained"
              onClick={submitFormRegisterHandler}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Typography
              style={{ cursor: 'pointer' }}
              onClick={() => {
                push('LOGIN')
              }}
            >
              Login
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Register
