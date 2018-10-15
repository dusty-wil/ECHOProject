<template>
    <li class="searchResult">
        <img v-bind:src="'https://img.youtube.com/vi/' + SearchResult.youtube_id + '/mqdefault.jpg'"/>
        <h4>{{SearchResult.title}}</h4>
        <p>
            {{SearchResult.author.name}} <br/>
            {{SearchResult.desc}}
        </p>
    </li>
</template>
<script>
export default {
  components: {
  },
  props: {
    SearchResult: {
      type: Object
    }
  }
}
</script>
