<template>
	<!-- Navigation -->
	<section>
		<nav class="navbar navbar-fixed-top navbar-toggleable">
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<router-link class="navbar-brand" to="/">
				<span class="logo">
					<img src="../../../../shared/src/assets/img/logo.png" alt="Echo">
				</span>
			</router-link>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
				</ul>
			</div>
		</nav>
	</section>

</template>


<script>
	import { mapMutations } from 'vuex'

	export default {
	  methods: mapMutations([ 'TOGGLE_FLAG' ]),
	  mounted () {
	    $('[data-toggle="tooltip"]').tooltip()
	  }
	}
</script>



<style scoped>
</style>
