import HttpService from '@/services/utils/http'
import { ApiResponse, UserData } from 'HTTPApi'

const currentUser = async (): Promise<ApiResponse<UserData>> => {
  try {
    const { data } = await HttpService.get<ApiResponse<UserData>>('/profile')
    return data
  } catch (err) {
    throw err.response ? new Error(err.response.data.message) : err
  }
}

const UserService = {
  currentUser,
}

export default UserService
