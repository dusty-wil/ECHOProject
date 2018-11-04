    <template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">{{story.title}}</h2>
            <Story :Story="story"/>
        </div>
    </div>
</template>
<script>
import Story from '../general/Story.vue'

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
      this.story = getStoryById(this.$route.params.id)
    }
  }

}

function getStoryById (id) {
  var stories = getAllStories()
  for (var story of stories) {
    if (story.id === id) {
      return story
    }
  }
}

// temporary function to emulate getting data from the database
function getAllStories () {
  return [
    {
      id: 1,
      youtube_id: '_t0wB8Jb91Q',
      title: 'Living Labor Free',
      desc: 'this is a placeholder description of the Living Labor Free story',
      author: {id: 1, name: 'author1'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 4, name: 'theme4'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 4, name: 'category4'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 4, name: 'period4'}
      ]
    },
    {
      id: 2,
      youtube_id: '84HFEQnryWk',
      title: 'Freddie Elkes: POW',
      desc: 'this is a placeholder description of the Freddie Elkes: POW  story',
      author: {id: 2, name: 'author2'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 2, name: 'theme2'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 2, name: 'category2'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 2, name: 'period2'}
      ]
    },
    {
      id: 3,
      youtube_id: 'Oi4G0asaJTI',
      title: 'The Crime of the Century Almost',
      desc: 'this is a placeholder description of the The Crime of the Century Almost story',
      author: {id: 3, name: 'author3'},
      themes: [
        {id: 3, name: 'theme3'},
        {id: 4, name: 'theme4'}
      ],
      categories: [
        {id: 2, name: 'category2'},
        {id: 3, name: 'category3'}
      ],
      periods: [
        {id: 1, name: 'period1'},
        {id: 4, name: 'period4'}
      ]
    },
    {
      id: 4,
      youtube_id: 'ISxd8B1FM08',
      title: 'The Linsly School "Threads of History"',
      desc: 'this is a placeholder description of the The Linsley School "Threads of History" story',
      author_id: 4,
      author: {id: 3, name: 'author3'},
      themes: [
        {id: 1, name: 'theme1'},
        {id: 2, name: 'theme2'}
      ],
      categories: [
        {id: 1, name: 'category1'},
        {id: 3, name: 'category3'},
        {id: 4, name: 'category4'}
      ],
      periods: [
        {id: 2, name: 'period2'},
        {id: 4, name: 'period4'}
      ]
    }
  ]
}
</script>
