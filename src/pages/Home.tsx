import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Book } from 'ApiState'
import BookItem from '@/components/BookItem'

const generateBook = (
  title: string,
  description: string,
  authors: string[]
): Book => ({
  id: Math.random().toString(),
  userId: Math.random().toString(),
  title,
  description,
  authors,
})

const books: Book[] = [
  generateBook('Hello', 'Hello world', ['alfian', 'andi']),
  generateBook('Hello', 'Hello world', ['alfian', 'andi']),
  generateBook('Hello', 'Hello world', ['alfian', 'andi']),
  generateBook('Hello', 'Hello world', ['alfian', 'andi']),
  generateBook('Hello', 'Hello world', ['alfian', 'andi']),
]

const Home = (): React.ReactElement => (
  <Grid container direction="column">
    <Grid item>
      <Typography variant="h4">MyBooks</Typography>
      <Typography>Welcome, Alfian</Typography>
    </Grid>
    <Grid item>
      <Button color="primary" variant="contained">
        Add
      </Button>
    </Grid>
    <Grid item style={{ marginTop: '1rem' }}>
      <Grid container spacing={3}>
        {books.map((book) => (
          <BookItem {...book} key={book.id} />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default Home