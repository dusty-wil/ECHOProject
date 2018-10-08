<template>
    <div class="story">
        <div id="player"></div>
        <h4>{{Story.title}}</h4>
        <p>
            {{Story.author.name}} <br/>
            {{Story.youtube_id}} <br/>
            {{Story.desc}}
            Themes: 
            <ul class="themeTagList">
                <ThemeTag v-for="theme in Story.themes" :Theme="theme"/>
            </ul>
            Categories: 
            <ul class="categoryTagList">
                <CategoryTag v-for="category in Story.categories" :Category="category"/>
            </ul>
            Periods: 
            <ul class="periodTagList">
                <PeriodTag v-for="period in Story.periods" :Period="period"/>
            </ul>
        </p>
    </div>
</template>
<script>
import ThemeTag from './ThemeTag.vue'
import CategoryTag from './CategoryTag.vue'
import PeriodTag from './PeriodTag.vue'

export default {
  components: {
    ThemeTag: ThemeTag,
    CategoryTag: CategoryTag,
    PeriodTag: PeriodTag
  },
  props: {
    Story: {
      type: Object
    }
  },
  mounted () {
    console.log('mounted')
    console.log(this.Story)
    loadYTPlayer(this.Story.youtube_id)
  }
}

function loadYTPlayer (youtubeId) {
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    var tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubePlayerAPIReady = function () {
      loadYTVideo(youtubeId)
    }
  } else {
    loadYTVideo(youtubeId)
  }
}

var player

function loadYTVideo (youtubeId) {
  player = new YT.Player('player', {
    height: '490',
    width: '880',
    videoId: youtubeId,
    playerVars: { 
      controls: 1, 
      showinfo: 0, 
      rel: 0, 
      showsearch: 0, 
      iv_load_policy: 3 
    },
    events: {
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError,
      'onReady': onPlayerReady
    }
  })
}

function onPlayerStateChange (event) {
  console.log(event)

  if (event.data === YT.PlayerState.PLAYING) {
    console.log('video playing')
  } else if (event.data === YT.PlayerState.ENDED) {
    console.log('video ended')
  }
}

function onPlayerReady (event) {
  console.log('player ready')
  console.log(event)
}

function onPlayerError (event) {
  console.log('youtube player error')
  console.log(event)
}

function stopVideo () {
  player.stopVideo()
}
</script>