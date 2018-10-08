'use strict'
import axios from 'axios'
import config from '../auth/src/clientConfig/main'
import users from './users'
import stories from './stories'


const reqInstance = axios.create({
  baseURL: `api/${config.api_version}/`,
  json: true
})

export default {
  users: users(reqInstance),
  stories: stories(reqInstance)
}
