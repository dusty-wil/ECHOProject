<template>
    <router-link tag="li" :to="'/story/search/byName/' + Name.id" class="nameTag">
       <a>{{Name.name}}</a>
    </router-link>
</template>
<script>
export default {
  props: {
    Name: {
      type: Object
    }
  }
}
</script>

