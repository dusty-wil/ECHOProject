<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Search Results for stories by {{searchType}}: {{typeName}}</h2>
                <ul class="storySearchResults">
                    <!-- <StorySearchResult v-for="result in results" :StorySearchResult="result" :key="result.id"/> -->
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
  methods: {
  }
}
</script>
