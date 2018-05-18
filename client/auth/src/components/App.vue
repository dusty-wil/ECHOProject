<template>

<div id='app'>
<TopBar></TopBar>
<router-view></router-view>
</div>
</template>

<script>
import TopBar from './general/TopBar.vue'
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>
