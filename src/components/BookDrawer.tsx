import React, { useMemo, useState } from 'react'
import {
  Button,
  Drawer,
  DrawerProps,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { Book, InputState } from 'ApiState'
import generateRandom from '@/helpers/random'
import { BookBody } from 'HTTPApi'
import BookService from '@/services/http/book'

interface AddBookDrawerProps extends DrawerProps {
  onClickClose?: () => void
  onFinishAdd?: (book: Book) => void
  onFinishUpdate?: (book: Book) => void
  type?: 'ADD' | 'UPDATE'
  initialBook?: Book
}

const BookDrawer = (props: AddBookDrawerProps): React.ReactElement => {
  const getInitialAuthorMap = useMemo(() => {
    if (props.initialBook) {
      return props.initialBook.authors.map((author) => ({
        id: generateRandom(),
        value: author,
        errorMessage: '',
      }))
    }

    return []
  }, [props.initialBook])

  const [title, setTitle] = useState<InputState>({
    value: props.initialBook ? props.initialBook.title : '',
    errorMessage: '',
  })
  const [description, setDescription] = useState<InputState>({
    value: props.initialBook ? props.initialBook.description : '',
    errorMessage: '',
  })
  const [authors, setAuthors] = useState<InputState[]>(getInitialAuthorMap)

  const inputTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const payload: InputState = {
      value,
      errorMessage: '',
    }
    if (!value) payload.errorMessage = 'Please fill this input'
    setTitle(payload)
  }

  const inputDescriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const payload: InputState = {
      value,
      errorMessage: '',
    }
    if (!value) payload.errorMessage = 'Please fill this input'
    setDescription(payload)
  }

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

  const addBookHandler = async () => {
    const bookData: BookBody = {
      title: title.value,
      description: description.value,
      authors: authors.map((author) => author.value),
    }

    try {
      const { data } = await BookService.store(bookData)
      if (props.onFinishAdd && props.onClickClose) {
        props.onFinishAdd(data)
        props.onClickClose()
      }
    } catch (err) {
      alert('failed to store book')
    }
  }

  const updateBookHandler = async () => {
    if (!props.initialBook) return

    const bookData: BookBody = {
      title: title.value,
      description: description.value,
      authors: authors.map((author) => author.value),
    }

    try {
      const { data } = await BookService.update(props.initialBook.id, bookData)
      if (props.onFinishUpdate && props.onClickClose) {
        props.onFinishUpdate(data)
        props.onClickClose()
      }
    } catch (err) {
      alert('failed to store book')
    }
  }

  const submitHandler = () => {
    switch (props.type) {
      case 'ADD': {
        addBookHandler().then()
        break
      }
      case 'UPDATE': {
        updateBookHandler().then()
        break
      }
      default: {
        console.log('err')
      }
    }
  }

  const drawerTitle = useMemo(
    () => (props.type === 'ADD' ? 'Add Book' : 'Update Book'),
    [props.type]
  )

  const drawerProps = { ...props }
  delete drawerProps.onClickClose
  delete drawerProps.type
  delete drawerProps.initialBook
  delete drawerProps.onFinishAdd
  delete drawerProps.onFinishUpdate

  return (
    <Drawer anchor="right" {...drawerProps}>
      <Paper
        elevation={0}
        style={{
          padding: '1rem',
          width: '350px',
        }}
      >
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h4">{drawerTitle}</Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Title"
              placeholder="Hello world !"
              onChange={inputTitleHandler}
              error={!!title.errorMessage}
              helperText={title.errorMessage}
              value={title.value}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Description"
              placeholder="Hello world this is description !"
              onChange={inputDescriptionHandler}
              error={!!description.errorMessage}
              helperText={description.errorMessage}
              value={description.value}
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
                    error={!!author.errorMessage}
                    helperText={author.errorMessage}
                    onChange={(e) => {
                      const newAuthors = [...authors]
                      const { value } = e.target
                      const payload: InputState = {
                        id: author.id,
                        value,
                        errorMessage: '',
                      }
                      if (!value)
                        payload.errorMessage = 'Please fill this input'
                      newAuthors[idx] = payload
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
              onClick={submitHandler}
              style={{
                marginRight: '1rem',
              }}
            >
              {drawerTitle}
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                if (props.onClickClose) props.onClickClose()
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

export default BookDrawer
