<template>
<div id='app'>
    <NavBar></NavBar>
    <div class="bodyContainer">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import NavBar from './general/NavBar.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
