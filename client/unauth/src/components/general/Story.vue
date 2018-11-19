<template>
    <div class="story">
        <div id="player"></div>
        <p>
            <span class="storyDesc">{{Story.desc}}</span>
            <span class="storyAuthors"><span class="authorTag" v-for="author in Story.author">{{author.name}}</span></span>
            <br/>
            <span class="tagLbl">Subjects:</span>
            <ul class="subjectTagList">
                <SubjectTag v-for="subject in this.SubjectList" :Subject="subject" :key="subject.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Categories:</span>
            <ul class="categoryTagList">
                <CategoryTag v-for="category in this.categoryList" :Category="category" :key="category.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Names:</span>
            <ul class="nameTagList">
                <NameTag v-for="name in this.nameList" :Name="name" :key="name.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Dates:</span>
            <ul class="periodTagList">
                <PeriodTag v-for="period in this.periodList" :Period="period" :key="period.id"/>
            </ul>
            <br/>
            <span class="tagLbl">Locations:</span>
            <ul class="locationTagList">
                <LocationTag v-for="location in this.locationList" :Location="location" :key="location.id"/>
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
    console.log(this.Story.youtube_path)
    this.loadYTPlayer()
    this.fetchData()
  },

  methods: Object.assign({
    fetchData () {
      this.getStoryCategories()
      this.getStoryLocations()
      this.getStoryNames()
      this.getStoryPeriods()
      this.getStorySubjects()
    },

    getStoryCategories () {
      for (var category of this.Story.categories) {
        this.getCategoryById(category)
          .then((result) => {
            console.log(result)
            this.categoryList.push(result)
          })
      }
    },

    getStoryLocations () {
      for (var location of this.Story.locations) {
        this.getLocationById(location)
          .then((result) => {
            console.log(result)
            this.locationList.push(result)
          })
      }
    },

    getStoryNames () {
      for (var name of this.Story.names) {
        this.getNameById(name)
          .then((result) => {
            console.log(result)
            this.nameList.push(result)
          })
      }
    },

    getStoryPeriods () {
      for (var period of this.Story.periods) {
        this.getPeriodById(period)
          .then((result) => {
            console.log(result)
            this.periodList.push(result)
          })
      }
    },

    getStorySubjects () {
      for (var subject of this.Story.subjects) {
        this.getSubjectById(subject)
          .then((result) => {
            console.log(result)
            this.subjectList.push(result)
          })
      }
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
