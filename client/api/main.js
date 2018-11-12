'use strict'

import axios from 'axios'
import config from '../auth/src/clientConfig/main'
import users from './users'
import names from './names'
import categories from './categories'
import periods from './periods'
import locations from './locations'
import authors from './authors'
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
  authors: authors(reqInstance),
  locations: locations(reqInstance),
  periods: periods(reqInstance),
  categories: categories(reqInstance),
  subjects: subjects(reqInstance),
  themes: themes(reqInstance)
}
