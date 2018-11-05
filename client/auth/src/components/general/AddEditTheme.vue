<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Themes</h2>
            <div class="attributeListContainer">
                <h6>Active Themes</h6>
                <ul class="selectAttributeList" id="selectTheme">
                    <li v-for="theme in this.themeList" v-on:click="selectTheme(theme.id)">
                        {{theme.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editThemeForm">
                <label class="editFormLbl" for="themeName">Theme Name:</label>
                <input type="text" class="editFormTxt" id="themeName" v-model="selectedTheme.name" placeholder="Theme Name"/>
                
                <label class="editFormLbl" for="themeDesc">Theme Description:</label>
                <input type="text" class="editFormTxt" id="themeDesc" v-model="selectedTheme.description" placeholder="Theme Description"/>
                
                <input type="hidden" id="themeId" v-model="selectedTheme.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="saveTheme">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delTheme">Delete</button>
            </form>
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
      if (this.selectedTheme.name === '' || this.selectedTheme.description === '') {
        return
      }
 
      if (this.selectedTheme.id === null || this.selectedTheme.id === '' || this.selectedTheme.id === 0) {
        this.addNewTheme(this.selectedTheme)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateTheme(this.selectedTheme)
          .then((result) => {
            this.fetchData()
          })
      }
    },
    delTheme () {
      if (this.selectedTheme.id === null || this.selectedTheme.id === "" || this.selectedTheme.id === 0) {
        return
      }

      this.deleteTheme(this.selectedTheme)
        .then((result) => {
          console.log(result)
        })
    },
    clearForm () {
      this.selectedTheme.id = null
      this.selectedTheme.name = null
      this.selectedTheme.description = null
    }
  }, mapActions([
    'getThemeById',
    'getAllThemes',
    'updateTheme',
    'addNewTheme',
    'deleteTheme'
  ]))
}
</script>
