import { ApiResponse, BookBody, BookData } from 'HTTPApi'
import HttpService from '@/services/utils/http'
import { Book } from 'ApiState'

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

const BookService = {
  store,
  getAll,
}

export default BookService
