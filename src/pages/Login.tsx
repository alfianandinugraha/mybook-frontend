import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'

const useClasses = makeStyles(() => ({
  textField: {
    marginBottom: '1rem',
  },
}))

const Login = (): React.ReactElement => {
  const classes = useClasses()

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
        <Grid container alignItems="center">
          <Grid item style={{ marginRight: '1rem' }}>
            <Button color="primary" variant="contained">
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
