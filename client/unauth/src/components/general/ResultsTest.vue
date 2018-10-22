<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Search Results</h2>
                <ul class="searchResults">
                    <SearchResult v-for="result in results" :StorySearchResult="result"/>
                </ul>
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
  data: function () {
    return {
      results: [
        {
          id: 1,
          youtube_id: '_t0wB8Jb91Q',
          title: 'Living Labor Free',
          desc: 'this is a placeholder description of the Living Labor Free story',
          author: {id: 1, name: 'author1'}
        },
        {
          id: 2,
          youtube_id: '84HFEQnryWk',
          title: 'Freddie Elkes: POW',
          desc: 'this is a placeholder description of the Freddie Elkes: POW  story',
          author: {id: 2, name: 'author2'}
        },
        {
          id: 3,
          youtube_id: 'Oi4G0asaJTI',
          title: 'The Crime of the Century Almost',
          desc: 'this is a placeholder description of the The Crime of the Century Almost story',
          author: {id: 3, name: 'author3'}
        },
        {
          id: 4,
          youtube_id: 'ISxd8B1FM08',
          title: 'The Linsly School "Threads of History"',
          desc: 'this is a placeholder description of the The Linsley School "Threads of History" story',
          author_id: 4,
          author: {id: 3, name: 'author3'}
        }
      ]
    }
  }
}
</script>
