import React from 'react'
import { Drawer, DrawerProps, Grid, Paper, Typography } from '@material-ui/core'
import BookForm from '@/components/BookForm'

interface AddBookDrawerProps extends DrawerProps {
  onClickClose: () => void
}

const AddBookDrawer = (props: AddBookDrawerProps): React.ReactElement => (
  <Drawer anchor="right" {...props}>
    <Paper
      elevation={0}
      style={{
        padding: '1rem',
        width: '350px',
      }}
    >
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h4">Add Book</Typography>
        </Grid>
        <BookForm
          type="ADD"
          onSubmit={(payload) => {
            console.log(payload)
            props.onClickClose()
          }}
          onClickClose={() => props.onClickClose()}
        />
      </Grid>
    </Paper>
  </Drawer>
)

export default AddBookDrawer
