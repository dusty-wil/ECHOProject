<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Subjects</h2>
            <div class="attributeListContainer">
                <h6>Active Subjects</h6>
                <ul class="selectAttributeList" id="selectSubject">
                    <li v-for="subject in this.subjectList" v-on:click="selectSubject(subject.id)">
                        {{subject.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editSubjectForm">
                <label class="editFormLbl" for="subjectName">Subject Name:</label>
                <input type="text" class="editFormTxt" id="subjectName" v-model="selectedSubject.name" placeholder="Subject Name"/>

                <label class="editFormLbl" for="subjectDesc">Subject Description:</label>
                <input type="text" class="editFormTxt" id="subjectDesc" v-model="selectedSubject.description" placeholder="Subject Description"/>

                <input type="hidden" id="subjectId" v-model="selectedSubject.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="saveSubject">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delSubject">Delete</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    subjectList: null,
    selectedSubject: {
      id: null,
      name: null,
      description: null
    }
  }),

  mounted () {
    this.fetchData()
  },

  created () {
    // this.fetchData()
  },

  computed: Object.assign(
    mapGetters([
      'allSubjects'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllSubjects()
        .then((result) => {
          this.subjectList = this.allSubjects
          this.clearForm()
        })
    },

    selectSubject (subjectId) {
      this.getSubjectById(subjectId)
        .then((result) => {
          this.selectedSubject.id = result.id
          this.selectedSubject.name = result.name
          this.selectedSubject.description = result.description
        })
    },

    saveSubject () {
      if (this.selectedSubject.name === '' || this.selectedSubject.description === '') {
        return
      }

      if (this.selectedSubject.id === null || this.selectedSubject.id === '' || this.selectedSubject.id === 0) {
        this.createSubject(this.selectedSubject)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateSubject(this.selectedSubject)
          .then((result) => {
            this.fetchData()
          })
      }
    },

    delSubject () {
      if (this.selectedSubject.id === null || this.selectedSubject.id === '' || this.selectedSubject.id === 0) {
        return
      }

      this.deleteSubject(this.selectedSubject.id)
        .then((result) => {
          this.fetchData()
        })
    },

    clearForm () {
      this.selectedSubject.id = null
      this.selectedSubject.name = null
      this.selectedSubject.description = null
    }
  }, mapActions([
    'getSubjectById',
    'getAllSubjects',
    'updateSubject',
    'addNewSubject',
    'createSubject',
    'deleteSubject'
  ]))
}
</script>
