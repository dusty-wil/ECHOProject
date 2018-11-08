<template>
    <router-link tag="li" :to="'/story/search/byLocation/' + Location.id" class="locationTag">
       <a>{{Location.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Location: {
      type: Object
    }
  }
}
</script>
