<template>
    <div class="story">
        <div id="player"></div>
        <p>
            <span class="storyDesc">{{Story.desc}}</span>
            <span class="storyAuthors"><span class="authorTag" v-for="author in this.Story.authors">{{author.name}}</span></span>
            <br/>
            <span class="tagLbl">Subjects:</span>
            <ul class="subjectTagList">
                <SubjectTag v-for="subject in this.Story.subjects" :Subject="subject" :key="subject.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Categories:</span>
            <ul class="categoryTagList">
                <CategoryTag v-for="category in this.Story.categories" :Category="category" :key="category.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Names:</span>
            <ul class="nameTagList">
                <NameTag v-for="name in this.Story.names" :Name="name" :key="name.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Dates:</span>
            <ul class="periodTagList">
                <PeriodTag v-for="period in this.Story.periods" :Period="period" :key="period.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Locations:</span>
            <ul class="locationTagList">
                <LocationTag v-for="location in this.Story.locations" :Location="location" :key="location.id"/>
            </ul>
        </p>
    </div>
</template>
<script>
import ThemeTag from '../tag/ThemeTag.vue'
import CategoryTag from '../tag/CategoryTag.vue'
import PeriodTag from '../tag/PeriodTag.vue'
import NameTag from '../tag/NameTag.vue'
import SubjectTag from '../tag/SubjectTag.vue'
import LocationTag from '../tag/LocationTag.vue'

import { mapActions } from 'vuex'

export default {
  components: {
    ThemeTag: ThemeTag,
    CategoryTag: CategoryTag,
    PeriodTag: PeriodTag,
    NameTag: NameTag,
    SubjectTag: SubjectTag,
    LocationTag: LocationTag
  },

  props: {
    Story: {
      type: Object
    }
  },

  data: () => ({
    player: null,
    categoryList: [],
    locationList: [],
    nameList: [],
    periodList: [],
    subjectList: []
  }),

  mounted () {
    this.loadYTPlayer()
  },

  methods: Object.assign({
    fetchData () {
    },

    loadYTPlayer () {
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        var tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        var firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        var context = this
        window.onYouTubePlayerAPIReady = function () {
          context.loadYTVideo()
        }
      } else {
        this.loadYTVideo()
      }
    },

    loadYTVideo () {
      this.player = new YT.Player('player', {
        height: '490',
        width: '880',
        videoId: this.Story.youtube_path,
        playerVars: {
          controls: 1,
          showinfo: 0,
          rel: 0,
          showsearch: 0,
          iv_load_policy: 3
        },
        events: {
          'onStateChange': this.onPlayerStateChange,
          'onError': this.onPlayerError,
          'onReady': this.onPlayerReady
        }
      })
    },

    onPlayerStateChange (event) {
      console.log(event)

      if (event.data === YT.PlayerState.PLAYING) {
        console.log('video playing')
      } else if (event.data === YT.PlayerState.ENDED) {
        console.log('video ended')
      }
    },

    onPlayerReady (event) {
      console.log('player ready')
      console.log(event)
    },

    onPlayerError (event) {
      console.log('youtube player error')
      console.log(event)
    },

    stopVideo () {
      this.player.stopVideo()
    }
  },
  mapActions([
    'getCategoryById',
    'getLocationById',
    'getNameById',
    'getPeriodById',
    'getSubjectById'
  ]))
}
</script>
