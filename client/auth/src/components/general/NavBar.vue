<template>
	<section>
		<nav class="navbar">
			<ul class="navContainer">
                <li><router-link to="/AddEditSubject">Add/Edit Subjects</router-link></li>
                <li><router-link to="/AddEditCategory">Add/Edit Categories</router-link></li>
                <li><router-link to="/AddEditName">Add/Edit Names</router-link></li>
                <li><router-link to="/AddEditPeriod">Add/Edit Dates</router-link></li>
                <li><router-link to="/AddEditLocation">Add/Edit Locations</router-link></li>
                <li><router-link to="/AddEditStory">Add/Edit Stories</router-link></li>
                <li><a class="logOutLink" v-on:click="lo">Log Out</a></li>
            </ul>
		</nav>
	</section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: Object.assign({
    lo () {
      if (confirm('Are you sure you want to log out?')) {
        this.logout()
      }
    }
  },

  mapActions([
    'logout'
  ]))
}
</script>
