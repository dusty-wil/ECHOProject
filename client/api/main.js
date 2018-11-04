'use strict'
import axios from 'axios'
import config from '../auth/src/clientConfig/main'
import users from './users'
import names from './names'
import periods from './periods'
import subjects from './subjects'
import themes from './themes'
import stories from './stories'


const reqInstance = axios.create({
  baseURL: `api/${config.api_version}/`,
  json: true
})

export default {
  users: users(reqInstance),
  stories: stories(reqInstance),
  names: names(reqInstance),
  periods: periods(reqInstance),
  subjects: subjects(reqInstance),
  themes: themes(reqInstance)
}
