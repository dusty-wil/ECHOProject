<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Theme</h2>
            <form class="editAttributeForm" id="editThemeForm">
            <input type="text" class="editFormTxt" id="themeName" v-model="selectedTheme.name" placeholder="Theme Name"/>
            <input type="text" class="editFormTxt" id="themeDesc" v-model="selectedTheme.description" placeholder="Theme Description"/>
            <input type="hidden" id="themeId" v-model="selectedTheme.id" value=""/>
            <button type="submit" v-on:click="saveTheme">Save</button><button type="reset">Clear</button>
            </form>
            <ul class="selectAttributeList" id="selectTheme">
                <li v-for="theme in this.themeList" v-on:click="selectTheme(theme.id)">
                    {{theme.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },

  data: () => ({
    themeList: null,
    selectedTheme: {
      id: null,
      name: null,
      description: null
    },
  }),

  created () {
    this.fetchData()
    
  },

  methods: Object.assign({
    fetchData () {
      this.getAllThemes()
        .then((result) => {
          this.themeList = result
          console.log(this.themeList)
        })
    },
    selectTheme (themeId) {
      this.getThemeById(themeId)
        .then((result) => {
          this.selectedTheme.id = result.id
          this.selectedTheme.name = result.name
          this.selectedTheme.description = result.description
        })
    },
    saveTheme () {
      console.log(this.selectedTheme.id)
      console.log(this.selectedTheme.name)
      console.log(this.selectedTheme.description)
      this.updateTheme(this.selectedTheme)
        .then((result) => {
          this.fetchData()
        })
    }
  }, mapActions([
    'getThemeById',
    'getAllThemes',
    'updateTheme'
  ]))
}
</script>
