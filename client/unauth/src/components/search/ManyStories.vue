<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <template v-if="storyDataNotFound">
                    <h2>No results found for stories by {{searchType}}: {{typeVal}}</h2>
                    <p>Please try a different search.</p>
                </template>
                <template v-else>
                    <h2>Search results for stories by {{searchType}}: {{typeVal}}</h2>
                    <ul class="storySearchResults">
                        <StorySearchResult v-for="result in results" :StorySearchResult="result" :key="result.id"/>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import StorySearchResult from './StorySearchResult.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    StorySearchResult: StorySearchResult
  },

  data: function () {
    return {
      results: null,
      searchType: '',
      typeVal: '',
      storyDataNotFound: false
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  created () {
    this.fetchData()
  },

  methods: Object.assign({
    fetchData () {
      this.results = null
      var searchParam = this.getSearchParam(this.$route.path)
      var isMatching = this.isMatchingSearch(this.$route.path)

      this.searchType = searchParam.substring(2).toLowerCase()
      // also show the value that was searched for
      this.getStoriesBy(this.searchType, this.$route.params, isMatching)
    },

    getSearchParam (path) {
      var pathSegs = path.split('/')
      if (pathSegs[2] === 'search') {
        return pathSegs[3]
      }
    },

    isMatchingSearch (path) {
      var pathSegs = path.split('/')
      return pathSegs[2] === 'search' && pathSegs[4] === 'matching'
    },

    getStoriesBy (searchType, searchParam, isMatching) {
      if (!isMatching && searchParam.id) {
        this['get' + searchType.charAt(0).toUpperCase() + searchType.substr(1) + 'ById'](searchParam.id)
          .then((res) => {
            this.typeVal = res.name
          })
        this.getStoriesByType(searchType, searchParam.id)
      } else if (isMatching && searchParam.searchValue) {
        var searchVal = searchParam.searchValue
        this.typeVal = searchVal
        this.getStoriesByMatch(searchType, searchVal)
      }
    },

    getStoriesByType (searchType, id) {
      if (searchType === 'category') {
        this.getByCategoryId(id)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'location') {
        this.getByLocationId(id)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'name') {
        this.getByNameId(id)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'period') {
        this.getByPeriodId(id)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'subject') {
        this.getBySubjectId(id)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'author') {
        this.getByAuthorId(id)
          .then((results) => {
            this.parseResults(results)
          })
      }
    },

    getStoriesByMatch (searchType, searchVal) {
      if (searchType === 'category') {
        this.getByCategoryVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'location') {
        this.getByLocationVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'name') {
        this.getByNameVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'period') {
        this.getByPeriodVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'subject') {
        this.getBySubjectVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'author') {
        this.getByAuthorVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      } else if (searchType === 'title') {
        this.getByTitleVal(searchVal)
          .then((results) => {
            this.parseResults(results)
          })
      }
    },

    parseResults (results) {
      if (results.length < 1) {
        this.storyDataNotFound = true
      } else {
        this.storyDataNotFound = false
        this.results = results
      }
    }
  },
  mapActions([
    'getByCategoryId',
    'getByLocationId',
    'getByNameId',
    'getByPeriodId',
    'getByAuthorId',
    'getBySubjectId',
    'getByCategoryVal',
    'getByLocationVal',
    'getByNameVal',
    'getByPeriodVal',
    'getBySubjectVal',
    'getByAuthorVal',
    'getByTitleVal',
    'getCategoryById',
    'getLocationById',
    'getNameById',
    'getPeriodById',
    'getAuthorById',
    'getSubjectById',
    'getThemeById'
  ]))
}
</script>
