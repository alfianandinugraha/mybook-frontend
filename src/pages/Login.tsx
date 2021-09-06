import React, { useState } from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { InputState } from 'ApiState'
import isEmail from 'validator/lib/isEmail'
import useHistoryPusher from '@/hooks/useHistoryPusher'
import AuthService from '@/services/http/auth'
import UserService from '@/services/http/user'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'

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
  const [, setUser] = useAtom(userAtom)
  const push = useHistoryPusher()
  const classes = useClasses()

  const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    const isValidEmail = isEmail(newEmail)
    const payload = {
      value: newEmail,
      errorMessage: '',
    }
    if (!isValidEmail) payload.errorMessage = 'Please input email correctly'
    if (!newEmail) payload.errorMessage = 'Please fill this input'
    setEmail(payload)
  }

  const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    const payload = {
      value: newPassword,
      errorMessage: '',
    }
    if (!newPassword) payload.errorMessage = 'Please fill this input'
    setPassword(payload)
  }

  const submitForm = async () => {
    const isFormFilled = email.value && password.value
    if (!isFormFilled) return

    try {
      await AuthService.login(email.value, password.value)
      const { data } = await UserService.currentUser()
      setUser(data)
    } catch (err) {
      setUser(null)
    }
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
          onChange={inputEmailHandler}
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
          onChange={inputPasswordHandler}
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
            <Typography
              style={{ cursor: 'pointer' }}
              onClick={() => {
                push('REGISTER')
              }}
            >
              Register
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
