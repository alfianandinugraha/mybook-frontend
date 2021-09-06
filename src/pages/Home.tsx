import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Book } from 'ApiState'
import BookItem from '@/components/BookItem'
import BookDrawer from '@/components/BookDrawer'
import BookService from '@/services/http/book'

const Home = (): React.ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await BookService.getAll()
        setBooks(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBooks()
  }, [])

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4">MyBooks</Typography>
          <Typography>Welcome, Alfian</Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setIsDrawerOpen(true)
            }}
          >
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
      <BookDrawer
        anchor="right"
        open={isDrawerOpen}
        type="ADD"
        onClose={() => setIsDrawerOpen(false)}
        onClickClose={() => setIsDrawerOpen(false)}
        onFinishSubmit={(book) => {
          const newBooks = [book, ...books]
          setBooks(newBooks)
        }}
      />
    </>
  )
}

export default Home
