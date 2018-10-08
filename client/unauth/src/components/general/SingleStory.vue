<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Featured Video</h2>
            <Story :Story="story"/>
        </div>
    </div>
</template>
<script>
import Story from './Story.vue'
export default {
  components: {
    Story: Story
  },
  data: function () { 
    return {
      story: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.story = null
      console.log('this.$route.params.id')
      console.log(this.$route.params.id)
      this.story = getFeaturedStory()    
    }
  }

}

function getFeaturedStory () {
  return {
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
  }
}
</script>
