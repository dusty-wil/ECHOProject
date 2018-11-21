<template>
	<section>
		<nav class="navbar">
			<ul class="navContainer">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li>
                    Search Stories By
                    <select class="inputSel" name="searchSel" v-model="searchSel">
                        <option disabled value="">Please Choose</option>
                        <option value="bySubject">Subject</option>
                        <option value="byCategory">Category</option>
                        <option value="byPeriod">Date</option>
                        <option value="byName">Name</option>
                        <option value="byLocation">Location</option>
                        <option value="byAuthor">Author</option>
                        <option value="byTitle">Title</option>
                    </select>
                    <input type="text" class="inputTxt" name="searchTxt" v-model="searchTxt" placeholder="Enter search term"/>
                    <button class="inputBtn" id="searchGo" v-on:click="submitSearch()">go</button>
                </li>
                <li class="loginNav"><router-link to="/login">Log In</router-link></li>
            </ul>
		</nav>
	</section>
</template>
<script>
export default {
  data () {
    return {
      searchSel: '',
      searchTxt: ''
    }
  },
  methods: {
    submitSearch () {
      if (this.searchSel === '' || this.searchTxt === '') { return }
      this.$router.push({path: `/story/search/${this.searchSel}/matching/${this.searchTxt}`})
    }
  }
}
</script>
