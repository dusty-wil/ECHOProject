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
  methods: {
    fetchData () {
      this.results = null
      var searchParam = getSearchParam(this.$route.path)
      var isMatching = isMatchingSearch(this.$route.path)
     
      this.searchType = searchParam.substring(2).toLowerCase()
      // also show the value that was searched for

      this.results = getStoriesBy(this.searchType, this.$route.params, isMatching)
    }
  }
}

function getSearchParam (path) {
  var pathSegs = path.split('/')
  if (pathSegs[2] === 'search') {
    return pathSegs[3]
  }
}

function isMatchingSearch (path) { 
  var pathSegs = path.split('/')
  return pathSegs[2] === 'search' && pathSegs[4] === 'matching'
}

// temporary function to get stories based on search term, replace with model???
function getStoriesBy (searchType, searchParam, isMatching) {
  console.log(searchType)
  console.log(searchParam)
  console.log(isMatching)

  var storiesOut = []

  if (!isMatching && searchType !== 'author') { 
    storiesOut = getStoriesByType(searchType, searchParam.id)
  } else { 
    searchVal = (searchType === 'author') ? searchParam.name : searchParam.searchValue
    storiesOut = getStoriesByMatch(searchType, searchVal)
  }
  
  return storiesOut
}

function getStoriesByType (searchType, id) {
  var stories = getAllStories()
  var storiesOut = []

  for (var story of stories) {
    if (searchType === 'category' && typeof story.categories != 'undefined') {
      for (var category of story.categories) {
        if (category.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'date' && typeof story.dates != 'undefined') {
      for (var date of story.dates) {
        if (date.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'name' && typeof story.names != 'undefined') {
      for (var name of story.names) {
        if (name.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'period' && typeof story.periods != 'undefined') {
      for (var period of story.periods) {
        if (period.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'subject' && typeof story.subjects != 'undefined') {
      for (var subject of story.subjects) {
        if (subject.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'theme' && typeof story.themes != 'undefined') {
      for (var theme of story.themes) {
        if (theme.id == id) { storiesOut.push(story) }
      }
    }
  }
  
  return storiesOut
}

// temporary function to emulate getting data from the database
function getAllStories () {
  return [
    {
      id: 1,
      youtube_id: '_t0wB8Jb91Q',
      title: 'Living Labor Free',
      desc: 'this is a placeholder description of the Living Labor Free story',
      author: {id: 1, name: 'author1'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 4, name: 'theme4'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 4, name: 'category4'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 4, name: 'period4'}
      ]
    },
    {
      id: 2,
      youtube_id: '84HFEQnryWk',
      title: 'Freddie Elkes: POW',
      desc: 'this is a placeholder description of the Freddie Elkes: POW  story',
      author: {id: 2, name: 'author2'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 2, name: 'theme2'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 2, name: 'category2'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 2, name: 'period2'}
      ]
    },
    {
      id: 3,
      youtube_id: 'Oi4G0asaJTI',
      title: 'The Crime of the Century Almost',
      desc: 'this is a placeholder description of the The Crime of the Century Almost story',
      author: {id: 3, name: 'author3'},
      themes: [
        {id: 3, name: 'theme3'},
        {id: 4, name: 'theme4'}
      ],
      categories: [
        {id: 2, name: 'category2'},
        {id: 3, name: 'category3'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 4, name: 'period4'}
      ]
    },
    {
      id: 4,
      youtube_id: 'ISxd8B1FM08',
      title: 'The Linsly School "Threads of History"',
      desc: 'this is a placeholder description of the The Linsley School "Threads of History" story',
      author_id: 4,
      author: {id: 3, name: 'author3'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 2, name: 'theme2'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 3, name: 'category3'},
        {id: 4, name: 'category4'}
      ],
      periods: [
        {id: 2, name: 'period2'},
        {id: 4, name: 'period4'}
      ]
    }
  ]
}
</script>
