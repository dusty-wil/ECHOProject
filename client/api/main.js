'use strict'
import axios from 'axios'
import config from '../auth/src/clientConfig/main'
import users from './users'

const reqInstance = axios.create({
  baseURL: `api/${config.api_version}/`
})

export default {
  users: users(reqInstance)
}
