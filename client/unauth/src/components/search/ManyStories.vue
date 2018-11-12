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

  if (!isMatching) {
    storiesOut = getStoriesByType(searchType, searchParam.id)
  } else {
    // searchVal = searchParam.searchValue
    // storiesOut = getStoriesByMatch(searchType, searchVal)
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

    if (searchType === 'location' && typeof story.locations != 'undefined') {
      for (var location of story.locations) {
        if (location.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'theme' && typeof story.themes != 'undefined') {
      for (var theme of story.themes) {
        if (theme.id == id) { storiesOut.push(story) }
      }
    }

    if (searchType === 'author' && typeof story.author != 'undefined') {
      for (var author of story.author) {
        if (author.id == id) { storiesOut.push(story) }
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
      desc: 'The untold story of oppression gained by blood, tears and sorrows.',
      author: [
        {id: 1, name: 'Dillon Shash'},
        {id: 2, name: 'Destiny Cumberland'},
        {id: 3, name: 'Samuel Lucas'},
        {id: 4, name: 'Sarah Martin'}
      ],
      subjects: [
        {id: 1, name: 'Historical'},
        {id: 5, name: 'Test Theme 1'},
        {id: 2, name: 'The Historical Society of Mt Pleasant'}
      ],
      categories: [1, 2],
      periods: [
        {id: 1, name: 'Reconstruction era'},
        {id: 2, name: '1848'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}
      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
      ]
    },
    {
      id: 2,
      youtube_id: '84HFEQnryWk',
      title: 'Freddie Elkes: POW',
      desc: 'A POW captured by Japan in 1942',
      author: [
        {id: 5, name: 'Krista Wycinsky'},
        {id: 6, name: 'Caitlyn Snyder'},
        {id: 7, name: 'Will Roukes'}
      ],
      subjects: [
        {id: 3, name: 'POW'},
        {id: 5, name: 'Test Theme 1'},
        {id: 4, name: 'Ohio County Public Library'}
      ],
      categories: [3, 4],
      periods: [
        {id: 3, name: 'World War II'},
        {id: 4, name: '1942'},
        {id: 9, name: 'Test Period 3'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}
      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
      ]
    },
    {
      id: 3,
      youtube_id: 'Oi4G0asaJTI',
      title: 'The Crime of the Century Almost',
      desc: 'The attempted robbery of the Custom House containing One Million Dollars.',
      author: [
        {id: 8, name: 'Trianna Shope'}
      ],
      subjects: [
        {id: 5, name: 'Test Theme 1'},
        {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
      ],
      categories: [1, 4],
      periods: [
        {id: 5, name: 'Machine Age'},
        {id: 6, name: '1862'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}
      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
      ]
    },
    {
      id: 4,
      youtube_id: 'ISxd8B1FM08',
      title: 'The Linsly School "Threads of History"',
      desc: 'The evolution of the Linsly School uniforms',
      author: [
        {id: 9, name: 'Moriah Miller'},
        {id: 10, name: 'Taliesin Nolan'},
        {id: 11, name: 'Julie Strotman'}
      ],
      subjects: [
        {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
      ],
      categories: [3, 4],
      periods: [
        {id: 7, name: 'Late Modern Period'},
        {id: 8, name: '1814'},
        {id: 9, name: 'Test Period 3'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}
      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
      ]
    }
  ]
}
</script>
