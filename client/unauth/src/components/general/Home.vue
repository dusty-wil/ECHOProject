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
  return getRandomStory()
}

function getRandomStory () {
  var stories = getAllStories()
  var len = stories.length
  var rand = Math.floor(Math.random() * Math.floor(len))
  return stories[rand]
}

// temporary function to emulate getting data from the database
function getAllStories () {
  return [
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
      subjects: [
        {id: 1, name: 'Historical'},
        {id: 5, name: 'Test Theme 1'},
        {id: 2, name: 'The Historical Society of Mt Pleasant'}
      ],
      categories: [1,2],
      periods: [
        {id: 1, name: 'Reconstruction era'},
        {id: 2, name: '1848'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}

      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
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
      subjects: [
        {id: 3, name: 'POW'},
        {id: 5, name: 'Test Theme 1'},
        {id: 4, name: 'Ohio County Public Library'}
      ],
      categories: [2,3],
      periods: [
        {id: 3, name: 'World War II'},
        {id: 4, name: '1942'},
        {id: 9, name: 'Test Period 3'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}

      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
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
      subjects: [
        {id: 5, name: 'Test Theme 1'},
        {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
      ],
      categories: [1,3],
      periods: [
        {id: 5, name: 'Machine Age'},
        {id: 6, name: '1862'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}

      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
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
      subjects: [
        {id: 6, name: 'West Virginia Department of Arts, Culture and History'}
      ],
      categories: [1,4],
      periods: [
        {id: 7, name: 'Late Modern Period'},
        {id: 8, name: '1814'},
        {id: 9, name: 'Test Period 3'}
      ],
      names: [
        {id: 1, name: 'Test Name 1'},
        {id: 2, name: 'Test Name 2'}

      ],
      locations: [
        {id: 1, name: 'Allegheny County'},
        {id: 2, name: 'Mon Valley'}
      ]
    }
  ]
}
</script>
