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
          desc: 'The untold story of oppression gained by blood, tears and sorrows.',
          author: [
            {id: 1, name: 'Dillon Shash'},
            {id: 2, name: 'Destiny Cumberland'},
            {id: 3, name: 'Samuel Lucas'},
            {id: 4, name: 'Sarah Martin'}
          ],
          themes: [
            {id: 1, name: 'Historical'},
            {id: 5, name: 'Test Theme 1'},
            {id: 2, name: 'The Historical Society of Mt Pleasant'}
          ],
          categories: [
            {id: 1, name: 'Slavery'},
            {id: 2, name: 'American Plantations'}
          ],
          periods: [
            {id: 1, name: 'Reconstruction era'},
            {id: 2, name: '1848'}
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
          themes: [
            {id: 3, name: 'POW'},
            {id: 5, name: 'Test Theme 1'},
            {id: 4, name: 'Ohio County Public Library'}
          ],
          categories: [
            {id: 3, name: 'World War II'},
            {id: 4, name: 'POW'}
          ],
          periods: [
            {id: 3, name: 'World War II'},
            {id: 4, name: '1942'},
            {id: 9, name: 'Test Period 3'}
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
          themes: [
            {id: 5, name: 'Test Theme 1'},
            {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
          ],
          categories: [
            {id: 5, name: 'Robbery'},
            {id: 6, name: 'Crime'},
            {id: 10, name: 'Test Category 2'}
          ],
          periods: [
            {id: 5, name: 'Machine Age'},
            {id: 6, name: '1862'}
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
            {id: 11, name: 'Julie Strotman'},
          ],
          themes: [
            {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
          ],
          categories: [
            {id: 7, name: 'School'},
            {id: 8, name: 'Museum'},
            {id: 9, name: 'Military'},
            {id: 10, name: 'Test Category 2'}
          ],
          periods: [
            {id: 7, name: 'Late Modern Period'},
            {id: 8, name: '1814'},
            {id: 9, name: 'Test Period 3'}
          ]
        }
      ]
    }
  }
}
</script>
