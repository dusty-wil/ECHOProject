<template>
    <router-link tag="li" to="/story/byCategory/" class="themeTag">
       {{Category.name}}
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
