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

const BookService = {
  store,
}

export default BookService
