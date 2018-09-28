<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Search Results</h2>
                <SearchResult v-for="result in results" :SearchResult="result"/>
            </div>
        </div>
    </div>
</template>
<script>
import SearchResult from './SearchResult.vue'
export default {
  components: {
    SearchResult: SearchResult
  },
  data: function() { 
    return {
      results: [
        {
          id: 'sIjt6sV55iI',
          title: 'title1',
          desc: 'desc1',
          author: 'author1'
        },
        {
          id: '7PiOM3EdKKg',
          title: 'title2',
          desc: 'desc2',
          author: 'author2'
        },
        {
          id: 'MJfNI9DppP4',
          title: 'title3',
          desc: 'desc3',
          author: 'author3'
        },
        {
          id: 'hFQQrAnHnTc',
          title: 'title4',
          desc: 'desc4',
          author: 'author4'
        }
      ]
    }
  }
}
</script>
