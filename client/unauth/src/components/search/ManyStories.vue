<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Search Results for stories by {{searchType}}: {{typeName}}</h2>
                <ul class="storySearchResults">
                    <StorySearchResult v-for="result in results" :StorySearchResult="result" :key="result.id"/>
                </ul>
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
      typeName: ''
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

    // temporary function to get stories based on search term, replace with model???
    getStoriesBy (searchType, searchParam, isMatching) {
      console.log(searchType)
      console.log(searchParam)
      console.log(isMatching)

      if (!isMatching && searchParam.id) {
        this.getStoriesByType(searchType, searchParam.id)
      } else {
        // searchVal = searchParam.searchValue
        // storiesOut = getStoriesByMatch(searchType, searchVal)
      }
    },

    getStoriesByType (searchType, id) {
      if (searchType === 'category') {
        this.getByCategoryId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
      if (searchType === 'location') {
        this.getByLocationId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
      if (searchType === 'name') {
        this.getByNameId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
      if (searchType === 'period') {
        this.getByPeriodId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
      if (searchType === 'subject') {
        this.getBySubjectId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
      if (searchType === 'author') {
        this.getByAuthorId(id)
          .then((results) => {
            console.log(results)
            this.results = results
          })
      }
    }
  },
  mapActions([
    'getByCategoryId',
    'getByLocationId',
    'getByNameId',
    'getByPeriodId',
    'getByAuthorId',
    'getBySubjectId'
  ]))
}
</script>
