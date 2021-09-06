import { ApiResponse, BookBody, BookData } from 'HTTPApi'
import HttpService from '@/services/utils/http'

const store = async (book: BookBody): Promise<ApiResponse<BookData>> => {
  try {
    const { data } = await HttpService.post<ApiResponse<BookData>>(
      '/books',
      book
    )
    return data
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const getAll = async (): Promise<ApiResponse<BookData[]>> => {
  try {
    const { data } = await HttpService.get<ApiResponse<BookData[]>>('/books')
    return data
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const deleteBook = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const { data } = await HttpService.delete<ApiResponse<null>>(`/books/${id}`)
    return data
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const update = async (
  id: string,
  bookBody: BookBody
): Promise<ApiResponse<BookData>> => {
  try {
    const { data } = await HttpService.put<ApiResponse<BookData>>(
      `/books/${id}`,
      bookBody
    )
    return data
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const BookService = {
  store,
  getAll,
  delete: deleteBook,
  update,
}

export default BookService
