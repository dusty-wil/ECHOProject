<template>
    <router-link tag="li" :to="'/story/search/byCategory/' + Category.id" class="categoryTag">
       <a>{{Category.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Category: {
      type: Object
    }
  }
}
</script>
