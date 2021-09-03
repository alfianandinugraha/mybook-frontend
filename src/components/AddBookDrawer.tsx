import React, { useState } from 'react'
import {
  Button,
  Drawer,
  DrawerProps,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { InputState } from 'ApiState'
import generateRandom from '@/helpers/random'

interface AddBookDrawerProps extends DrawerProps {
  onClickClose: () => void
}

const AddBookDrawer = (props: AddBookDrawerProps): React.ReactElement => {
  const [authors, setAuthors] = useState<InputState[]>([
    { id: generateRandom(), value: '', errorMessage: '' },
  ])

  const removeAuthor = (id: string) => {
    if (authors.length === 1) return
    const newAuthors = authors.filter((author) => author.id !== id)
    setAuthors(newAuthors)
  }

  const pushAuthor = () => {
    setAuthors([
      ...authors,
      {
        id: generateRandom(),
        value: '',
        errorMessage: '',
      },
    ])
  }

  const submitAddBookHandler = () => {
    console.log(authors)
  }

  return (
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
          <Grid item>
            <TextField fullWidth label="Title" placeholder="Hello world !" />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Description"
              placeholder="Hello world this is description !"
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2} direction="column">
              {authors.length > 1 && (
                <Grid item>
                  <Typography variant="caption">
                    Double click to remove author
                  </Typography>
                </Grid>
              )}
              {authors.map((author, idx) => (
                <Grid
                  item
                  key={author.id}
                  onDoubleClick={() => author.id && removeAuthor(author.id)}
                >
                  <TextField
                    fullWidth
                    label="Author"
                    placeholder="Alfian"
                    value={author.value}
                    onChange={(e) => {
                      const newAuthors = [...authors]
                      newAuthors[idx].value = e.target.value
                      setAuthors(newAuthors)
                    }}
                  />
                </Grid>
              ))}
              <Grid item>
                <Button color="primary" variant="outlined" onClick={pushAuthor}>
                  <Typography variant="caption">Add Author</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={submitAddBookHandler}
              style={{
                marginRight: '1rem',
              }}
            >
              Add Book
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                props.onClickClose()
              }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Drawer>
  )
}

export default AddBookDrawer
