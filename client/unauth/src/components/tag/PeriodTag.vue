<template>
    <router-link tag="li" :to="'/story/search/byPeriod/' + Period.id" class="periodTag">
       <a>{{Period.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Period: {
      type: Object
    }
  }
}
</script>
