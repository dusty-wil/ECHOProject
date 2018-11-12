<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Stories</h2>
            <div class="activeStoryListContainer">
                <h6>Active Stories</h6>
                <ul class="selectAttributeList" id="selectStory">
                    <li v-for="story in this.storyList" v-on:click="selectStory(story.id)">
                        {{story.title}}
                    </li>
                </ul>
                <div class="formBtnContainer">
                    <button class="formBtn saveBtn" v-on:click="saveStory">Save</button>
                    <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                    <button class="formBtn delBtn" v-on:click="delStory">Delete</button>
                </div>
            </div>

            <form class="editAttributeForm" id="editStoryForm">
                <label class="editFormLbl" for="storyTitle">Story Title:</label>
                <input type="text" class="editFormTxt" id="storyName" v-model="selectedStory.title" placeholder="Story Title"/>

                <label class="editFormLbl" for="storyDesc">Story Description:</label>
                <textarea type="text" class="editFormTxtArea" id="storyDesc" v-model="selectedStory.description">Story Description</textarea>

                <label class="editFormLbl" for="storyAuthor">Story Author(s):</label>
                <input type="text" class="editFormTxt storyAuthor" placeholder="Author Name"/>
                <input type="text" class="editFormTxt storyAuthor" placeholder="Author Name"/>
                <input type="text" class="editFormTxt storyAuthor" placeholder="Author Name"/>
                <input type="text" class="editFormTxt storyAuthor" placeholder="Author Name"/>

                <label class="editFormLbl" for="storagePath">Upload Video:</label>
                <input type="file" class="editFormTxt" id="storagePath"/>

                <label class="editFormLbl" for="youtubeId">YouTube ID:</label>
                <input type="text" class="editFormTxt" id="youtubeId" v-model="selectedStory.youtube_path" placeholder="YouTube ID"/>

                <label class="editFormCheckLbl" for="featuredRotation">Featured Rotation:</label>
                <input type="checkbox" class="editFormCheck" v-model="selectedStory.featured_rotation" id="featuredRotation" />

                <input type="hidden" id="storyId" v-model="selectedStory.id"/>
            </form>

            <div class="attributeListContainer">
                <h3>Select Story Tags</h3>
                <div class="editStoryAttributeColumn">
                    <span>Subjects:</span>
                    <ul class="selectStoryAttributeList" id="selectSubject">
                        <li v-for="subject in this.subjectList" :id="'subject' + subject.id" v-on:click="toggleSel('subject', subject.id)">
                            &bull; {{subject.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Categories:</span>
                    <ul class="selectStoryAttributeList" id="selectCategory">
                        <li v-for="category in this.categoryList" :id="'category' + category.id" v-on:click="toggleSel('category', category.id)">
                            &bull; {{category.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Names:</span>
                    <ul class="selectStoryAttributeList" id="selectName">
                        <li v-for="name in this.nameList" :id="'name' + name.id" v-on:click="toggleSel('name', name.id)">
                            &bull; {{name.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Dates:</span>
                    <ul class="selectStoryAttributeList" id="selectPeriod">
                        <li v-for="period in this.periodList" :id="'period' + period.id" v-on:click="toggleSel('period', period.id)">
                            &bull; {{period.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Locations:</span>
                    <ul class="selectStoryAttributeList" id="selectLocation">
                        <li v-for="location in this.locationList" :id="'location' + location.id" v-on:click="toggleSel('location', location.id)">
                            &bull; {{location.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    storyList: null,
    categoryList: null,
    periodList: null,
    locationList: null,
    subjectList: null,
    nameList: null,
    selectedStory: {
      id: null,
      title: null,
      description: null,
      author: null,
      approved: null,
      youtubeId: null,
      storagePath: null,
      featuredRotation: null
    },
    selectedCategories: [],
    selectedPeriods: [],
    selectedLocations: [],
    selectedSubjects: [],
    selectedNames: []
  }),

  created () {
    // this.fetchData()
  },

  mounted () {
    this.fetchData()
  },

  computed: Object.assign(
    mapGetters([
      'allStories',
      'allCategories',
      'allLocations',
      'allNames',
      'allPeriods',
      'allSubjects'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllStories()
        .then(() => {
          this.storyList = this.allStories
        })

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

    selectStory (storyId) {
      this.getStoryById(storyId)
        .then((result) => {
          console.log(result)
          this.selectedStory.id = result.id
          this.selectedStory.title = result.title
          this.selectedStory.description = result.description
        })
    },

    saveStory () {
      if (this.selectedStory.name === '' || this.selectedStory.description === '') {
        return
      }

      if (this.selectedStory.id === null || this.selectedStory.id === '' || this.selectedStory.id === 0) {
        this.addNewStory(this.selectedStory)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateStory(this.selectedStory)
          .then((result) => {
            this.fetchData()
          })
      }
    },

    delStory () {
      if (this.selectedStory.id === null || this.selectedStory.id === '' || this.selectedStory.id === 0) {
        return
      }

      this.deleteStory(this.selectedStory)
        .then((result) => {
          console.log(result)
        })
    },

    clearForm () {
      this.selectedStory.id = null
      this.selectedStory.name = null
      this.selectedStory.description = null
    },

    toggleSel (type, id) {
      $('#' + type + id).toggleClass('selectedAttribute')
    }
  }, mapActions([
    'getStoryById',
    'getAllStories',
    'getAllCategories',
    'getCategoryById',
    'getAllPeriods',
    'getPeriodById',
    'getAllNames',
    'getNameById',
    'getAllLocations',
    'getLocationById',
    'getAllSubjects',
    'getSubjectById',
    'updateStory',
    'addNewStory',
    'deleteStory'
  ]))
}
</script>
