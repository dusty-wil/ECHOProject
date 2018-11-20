<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Featured Video</h2>
            <template v-if="storyDataLoaded">
                <Story v-bind:Story="featuredStory"/>
            </template>
        </div>
    </div>
</template>
<script>
import Story from './Story.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Story: Story
  },

  data: function () {
    return {
      storyDataLoaded: false,
      featuredStory: null
    }
  },

  created () {
    this.fetchData()
  },

  methods: Object.assign({
    fetchData () {
      this.getRandomFeaturedStory()
        .then((story) => {
          this.featuredStory = story
          this.storyDataLoaded = true
        })
    }
  },
  mapActions([
    'getRandomFeaturedStory'
  ]))
}
</script>
