<template>
	<section>
		<nav class="navbar">
			<ul class="navContainer">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li>
                    Search Stories By
                    <select class="inputSel" name="searchSel" v-model="searchSel" v-on:change="searchSelChange">
                        <option disabled value="">Please Choose</option>
                        <option value="bySubject">Subject</option>
                        <option value="byCategory">Category</option>
                        <option value="byPeriod">Date</option>
                        <option value="byName">Name</option>
                        <option value="byLocation">Location</option>
                        <option value="byAuthor">Author</option>
                        <option value="byTitle">Title</option>
                    </select>

                    <select class="inputSel attribInput" id="categorySel" v-model="searchTxt">
                        <option disabled value="">Please Choose</option>
                        <option v-for="category in this.categoryList" :value="category.name">{{category.name}}</option>
                    </select>

                    <select class="inputSel attribInput" id="periodSel" v-model="searchTxt">
                        <option disabled value="">Please Choose</option>
                        <option v-for="period in this.periodList" :value="period.name">{{period.name}}</option>
                    </select>

                    <select class="inputSel attribInput" id="locationSel" v-model="searchTxt">
                        <option disabled value="">Please Choose</option>
                        <option v-for="location in this.locationList" :value="location.name">{{location.name}}</option>
                    </select>

                    <select class="inputSel attribInput" id="subjectSel" v-model="searchTxt">
                        <option disabled value="">Please Choose</option>
                        <option v-for="subject in this.subjectList" :value="subject.name">{{subject.name}}</option>
                    </select>

                    <select class="inputSel attribInput" id="nameSel" v-model="searchTxt">
                        <option disabled value="">Please Choose</option>
                        <option v-for="name in this.nameList" :value="name.name">{{name.name}}</option>
                    </select>

                    <input type="text" class="inputTxt attribInput" id="searchTxt" v-model="searchTxt" placeholder="Enter search term"/>

                    <button class="inputBtn" id="searchGo" v-on:click="submitSearch()">go</button>
                </li>
                <li class="loginNav"><router-link to="/login">Log In</router-link></li>
            </ul>
		</nav>
	</section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    searchSel: '',
    searchTxt: '',
    categoryList: null,
    periodList: null,
    locationList: null,
    subjectList: null,
    nameList: null
  }),

  mounted () {
    this.fetchData()
  },

  computed: Object.assign(
    mapGetters([
      'allCategories',
      'allLocations',
      'allNames',
      'allPeriods',
      'allSubjects'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllPeriods()
        .then(() => {
          this.periodList = this.allPeriods
        })

      this.getAllCategories()
        .then(() => {
          this.categoryList = this.allCategories
        })

      this.getAllSubjects()
        .then(() => {
          this.subjectList = this.allSubjects
        })

      this.getAllNames()
        .then(() => {
          this.nameList = this.allNames
        })

      this.getAllLocations()
        .then(() => {
          this.locationList = this.allLocations
        })
    },

    submitSearch () {
      if (this.searchSel === '' || this.searchTxt === '') { return }
      if (this.searchTxt.length < 3) { return }
      this.$router.push({path: `/story/search/${this.searchSel}/matching/${this.searchTxt}`})
    },

    searchSelChange () {
      $('.attribInput').each(function () {
        $(this).hide()
      })
      this.searchTxt = ''
      // $('#searchTxt').val('')

      if (this.searchSel === 'byCategory') {
        $('#categorySel').show()
      }
      if (this.searchSel === 'byLocation') {
        $('#locationSel').show()
      }
      if (this.searchSel === 'byName') {
        $('#nameSel').show()
      }
      if (this.searchSel === 'byPeriod') {
        $('#periodSel').show()
      }
      if (this.searchSel === 'bySubject') {
        $('#subjectSel').show()
      }
      if (this.searchSel === 'byAuthor' || this.searchSel === 'byTitle') {
        $('#searchTxt').show()
      }
    }
  },

  mapActions([
    'getAllCategories',
    'getAllPeriods',
    'getAllNames',
    'getAllLocations',
    'getAllSubjects'
  ]))
}
</script>
