import axios from 'axios'

const httpAuth = { ...axios }
httpAuth.defaults.baseURL = 'http://localhost:5500/api/auth/'

const HttpService = {
  auth: httpAuth,
}

export default HttpService
