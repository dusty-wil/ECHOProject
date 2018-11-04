<template>
	<section>
		<nav class="navbar admin-navbar">
			<ul class="navContainer">
                <li><h4 v-on:click='logout()'>Logout</h4></li>
            </ul>
		</nav>
	</section>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'NavBar',
  data: () => ({}),
  methods: mapActions(['logout'])
}
</script>
