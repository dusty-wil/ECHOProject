    <template>
    <div class="container">
        <div class="row">
            <template v-if="storyDataLoaded">
                <h2 class="pageTitle">{{story.title}}</h2>
                <Story :Story="story"/>
            </template>
            <template v-if="storyDataNotFound">
                <h2 class="pageTitle">No story matches found</h2>
                <p>Please try a different search.</p>
            </template>
        </div>
    </div>
</template>
<script>
import Story from '../general/Story.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Story: Story
  },

  data: function () {
    return {
      storyDataLoaded: false,
      storyDataNotFound: false,
      story: null
    }
  },

  mounted () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: Object.assign({
    fetchData () {
      if (this.$route.params.id) {
        this.getSearchResultById(this.$route.params.id)
          .then((story) => {
            if (story === null) {
              this.storyDataNotFound = true
            } else {
              this.story = story
              this.storyDataLoaded = true
              this.storyDataNotFound = false
            }
          })
      }
    }
  },
  mapActions([
    'getSearchResultById'
  ]))
}
</script>
