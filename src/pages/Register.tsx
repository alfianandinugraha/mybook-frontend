import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import useHistoryPusher from '@/hooks/useHistoryPusher'

const useClasses = makeStyles(() => ({
  textField: {
    marginBottom: '1rem',
  },
}))

const Register = (): React.ReactElement => {
  const push = useHistoryPusher()
  const classes = useClasses()

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
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Email"
          placeholder="your@email.com"
          type="email"
          className={classes.textField}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Password"
          placeholder="********"
          type="password"
          className={classes.textField}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Re-Password"
          placeholder="********"
          type="password"
          className={classes.textField}
        />
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item style={{ marginRight: '1rem' }}>
            <Button color="primary" variant="contained">
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
