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
            </div>
            
            <form class="editAttributeForm" id="editStoryForm">
                <label class="editFormLbl" for="storyTitle">Story Title:</label>
                <input type="text" class="editFormTxt" id="storyName" v-model="selectedStory.name" placeholder="Story Name"/>
                
                <label class="editFormLbl" for="storyDesc">Story Description:</label>
                <textarea type="text" class="editFormTxt" id="storyDesc" v-model="selectedStory.description">Story Description</textarea>
                
                <label class="editFormLbl" for="storyAuthor">Story Author(s):</label>
                <input type="text" class="editFormTxt" id="storyAuthor"  placeholder="Author Names"/>
                
                <label class="editFormLbl" for="storagePath">Upload Video:</label>
                <input type="file" class="editFormTxt" id="storagePath"/>
                
                <label class="editFormLbl" for="youtubeId">YouTube ID:</label>
                <input type="text" class="editFormTxt" id="youtubeId" placeholder="YouTube ID"/>
                
                <label class="editFormCheckLbl" for="youtubeId">Featured Rotation:</label>
                <input type="checkbox" class="editFormCheck" id="featuredRotation" />

                <input type="hidden" id="storyId" value=""/>
                
                <div class="formBtnContainer">               
                    <button class="formBtn saveBtn" v-on:click="saveStory">Save</button>
                    <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                    <button class="formBtn delBtn" v-on:click="delStory">Delete</button>
                </div>
            </form>
                
            <div class="attributeListContainer">
                <div class="editStoryAttributeColumn">
                    <span>Subjects:</span>
                    <ul class="selectAttributeList" id="selectSubject">
                        <li v-for="subject in this.subjectList" v-on:click="">
                            {{subject.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Categories:</span>
                    <ul class="selectAttributeList" id="selectCategory">
                        <li v-for="category in this.categoryList" v-on:click="">
                            {{category.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Names:</span>
                    <ul class="selectAttributeList" id="selectName">
                        <li v-for="name in this.nameList" v-on:click="">
                            {{name.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Dates:</span>
                    <ul class="selectAttributeList" id="selectPeriod">
                        <li v-for="period in this.periodList" v-on:click="">
                            {{period.name}}
                        </li>
                    </ul>
                </div>
                <div class="editStoryAttributeColumn">
                    <span>Locations:</span>
                    <ul class="selectAttributeList" id="selectLocation">
                        <li v-for="location in this.locationList" v-on:click="">
                            {{location.name}}
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },

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
  }),

  created () {
    this.fetchData()
  },

  methods: Object.assign({
    fetchData () {
      this.getAllStories()
        .then((result) => {
          this.storyList = result
        })
      
      this.getAllPeriods()
        .then((result) => {
          this.periodList = result
        })
      
      this.getAllCategories()
        .then((result) => {
          this.categoryList = result
        })
      
      this.getAllSubjects()
        .then((result) => {
          this.subjectList = result
        })
      
      this.getAllNames()
        .then((result) => {
          this.nameList = result
        })
      
      this.getAllLocations()
        .then((result) => {
          this.locationList = result
        })

    },
    selectStory (storyId) {
      this.getStoryById(storyId)
        .then((result) => {
          this.selectedStory.id = result.id
          this.selectedStory.name = result.name
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
      if (this.selectedStory.id === null || this.selectedStory.id === "" || this.selectedStory.id === 0) {
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
