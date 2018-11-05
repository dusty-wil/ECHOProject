<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Stories</h2>
            <div class="attributeListContainer">
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
                
                <input type="hidden" id="storyId" v-model="selectedStory.id" value=""/>
                
                <button class="formBtn saveBtn" v-on:click="saveStory">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn" v-on:click="delStory">Delete</button>
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
    storyList: null,
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
          console.log(this.storyList)
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
    'updateStory',
    'addNewStory',
    'deleteStory'
  ]))
}
</script>
