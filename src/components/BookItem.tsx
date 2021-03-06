import React, { useState } from 'react'
import { Book } from 'ApiState'
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core'
import BookDrawer from '@/components/BookDrawer'

interface BookItemProps extends Book {
  onDeleteClick?: (id: string) => void
  onFinishUpdate?: (book: Book) => void
}

const BookItem = (props: BookItemProps): React.ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const mapAuthor = props.authors.reduce((pre, curr) => `${pre}, ${curr}`)

  const deleteHandler = () => {
    if (props.onDeleteClick) {
      props.onDeleteClick(props.id)
    }
  }

  const updateHandler = () => {
    setIsDrawerOpen(true)
  }

  return (
    <>
      <Grid item md={4}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">{props.title}</Typography>
            <Typography>{props.description}</Typography>
            <Typography variant="caption">{mapAuthor}</Typography>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button
                color="secondary"
                variant="outlined"
                onClick={deleteHandler}
              >
                Delete
              </Button>
              <Button
                color="primary"
                variant="outlined"
                onClick={updateHandler}
              >
                Update
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <BookDrawer
        open={isDrawerOpen}
        type="UPDATE"
        initialBook={props}
        onClose={() => setIsDrawerOpen(false)}
        onClickClose={() => setIsDrawerOpen(false)}
        onFinishUpdate={props.onFinishUpdate}
      />
    </>
  )
}

export default BookItem
