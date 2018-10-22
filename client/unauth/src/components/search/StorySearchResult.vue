<template>
    <router-link tag="li" :to="'/story/byId/' + StorySearchResult.id" class="storySearchResult">
        <img v-bind:src="'https://img.youtube.com/vi/' + StorySearchResult.youtube_id + '/mqdefault.jpg'"/>
        <h4>{{StorySearchResult.title}}</h4>
        <p>
            {{StorySearchResult.author.name}} <br/>
            {{StorySearchResult.desc}}
        </p>
    </router-link>
</template>
<script>
export default {
  props: {
    StorySearchResult: {
      type: Object
    }
  }
}
</script>
