<template>
    <router-link tag="li" :to="'/story/search/byDate/' + Date.id" class="dateTag">
       <a>{{Date.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Date: {
      type: Object
    }
  }
}
</script>
