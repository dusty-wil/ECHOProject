<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Featured Video</h2>
            <Story :Story="featuredStory"/>
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
      featuredStory: getFeaturedStory()
    }
  }

}

function getFeaturedStory () {
  return {
    id: 1,
    youtube_id: '_t0wB8Jb91Q',
    title: 'Living Labor Free',
    desc: 'this is a placeholder description of the Living Labor Free story',
    author: {id: 1, name: 'test author 1'},
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
