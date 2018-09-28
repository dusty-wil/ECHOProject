<template>
    <div class="container">
        <div class="row">
            <div class="bodyWrapper">
                <h2>Featured Video</h2>
           
                <div id="player"></div>
            </div>
        </div>
    </div>
</template>
<script>
function getFeaturedVideoId () {
  return 'R-qnYGMAiZc'
}

function loadYTPlayer () {
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    var tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubePlayerAPIReady = function () {
      loadYTVideo()
    }
  } else {
    loadYTVideo()
  }
}

var player

function loadYTVideo () {
  player = new YT.Player('player', {
    height: '490',
    width: '880',
    videoId: getFeaturedVideoId(),
    playerVars: { controls: 1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
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

export default {
  mounted () {
    console.log('mounted')
    loadYTPlayer()
  }
}
</script>
