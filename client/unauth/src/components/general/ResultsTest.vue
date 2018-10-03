<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Search Results</h2>
                <ul class="searchResults">
                    <SearchResult v-for="result in results" :SearchResult="result"/>
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
          youtube_id: 'sIjt6sV55iI',
          title: 'title1',
          desc: 'desc1',
          author: {id: 1, name: 'author1'},
          themes: [
            {id: 1, name: 'theme1'},
            {id: 2, name: 'theme2'},
            {id: 3, name: 'theme3'},
            {id: 4, name: 'theme4'}
          ],
          categories: [
            {id: 1, name: 'category1'},
            {id: 2, name: 'category2'},
            {id: 3, name: 'category3'},
            {id: 4, name: 'category4'}
          ],
          periods: [
            {id: 1, name: 'period1'},
            {id: 2, name: 'period2'},
            {id: 3, name: 'period3'},
            {id: 4, name: 'period4'}
          ]
        },
        {
          id: 2,
          youtube_id: '7PiOM3EdKKg',
          title: 'title2',
          desc: 'desc2',
          author: {id: 2, name: 'author2'},
          themes: [
            {id: 1, name: 'theme1'},
            {id: 2, name: 'theme2'},
            {id: 3, name: 'theme3'},
            {id: 4, name: 'theme4'}
          ],
          categories: [
            {id: 1, name: 'category1'},
            {id: 2, name: 'category2'},
            {id: 3, name: 'category3'},
            {id: 4, name: 'category4'}
          ],
          periods: [
            {id: 1, name: 'period1'},
            {id: 2, name: 'period2'},
            {id: 3, name: 'period3'},
            {id: 4, name: 'period4'}
          ]
        },
        {
          id: 3,
          youtube_id: 'MJfNI9DppP4',
          title: 'title3',
          desc: 'desc3',
          author: {id: 3, name: 'author3'},
          themes: [
            {id: 1, name: 'theme1'},
            {id: 2, name: 'theme2'},
            {id: 3, name: 'theme3'},
            {id: 4, name: 'theme4'}
          ],
          categories: [
            {id: 1, name: 'category1'},
            {id: 2, name: 'category2'},
            {id: 3, name: 'category3'},
            {id: 4, name: 'category4'}
          ],
          periods: [
            {id: 1, name: 'period1'},
            {id: 2, name: 'period2'},
            {id: 3, name: 'period3'},
            {id: 4, name: 'period4'}
          ]
        },
        {
          id: 4,
          youtube_id: 'hFQQrAnHnTc',
          title: 'title4',
          desc: 'desc4',
          author_id: 4,
          author: {id: 3, name: 'author3'},
          themes: [
            {id: 1, name: 'theme1'},
            {id: 2, name: 'theme2'},
            {id: 3, name: 'theme3'},
            {id: 4, name: 'theme4'}
          ],
          categories: [
            {id: 1, name: 'category1'},
            {id: 2, name: 'category2'},
            {id: 3, name: 'category3'},
            {id: 4, name: 'category4'}
          ],
          periods: [
            {id: 1, name: 'period1'},
            {id: 2, name: 'period2'},
            {id: 3, name: 'period3'},
            {id: 4, name: 'period4'}
          ]
        }
      ]
    }
  }
}
</script>
