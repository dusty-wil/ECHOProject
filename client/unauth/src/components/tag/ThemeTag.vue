<template>
    <router-link tag="li" :to="'/story/search/byTheme/' + Theme.id" class="themeTag">
       <a>{{Theme.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Theme: {
      type: Object
    }
  }
}
</script>
