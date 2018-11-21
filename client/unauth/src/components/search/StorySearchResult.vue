<template>
    <router-link tag="li" :to="'/story/byId/' + StorySearchResult.id" class="storySearchResult">
        <img v-bind:src="'https://img.youtube.com/vi/' + StorySearchResult.youtube_path + '/mqdefault.jpg'"/>
        <h4>{{StorySearchResult.title}}</h4>
        <p>
            {{StorySearchResult.desc}}
            <br/>
            <span class="searchResultAuthorTag" v-for="author in StorySearchResult.authors">{{author.name}}</span>
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
