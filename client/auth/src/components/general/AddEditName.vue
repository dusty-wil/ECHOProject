<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Names</h2>
            <div class="attributeListContainer">
                <h6>Active Names</h6>
                <ul class="selectAttributeList" id="selectName">
                    <li v-for="name in this.nameList" v-on:click="selectName(name.id)">
                        {{name.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editNameForm">
                <label class="editFormLbl" for="nameName">Name:</label>
                <input type="text" class="editFormTxt" id="nameName" v-model="selectedName.name" placeholder="Name"/>

                <label class="editFormLbl" for="nameDesc">Name Description:</label>
                <input type="text" class="editFormTxt" id="nameDesc" v-model="selectedName.description" placeholder="Name Description"/>

                <input type="hidden" id="nameId" v-model="selectedName.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="saveName">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delName">Delete</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    nameList: null,
    selectedName: {
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
      'allNames'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllNames()
        .then((result) => {
          this.nameList = this.allNames
          this.clearForm()
        })
    },

    selectName (nameId) {
      this.getNameById(nameId)
        .then((result) => {
          this.selectedName.id = result.id
          this.selectedName.name = result.name
          this.selectedName.description = result.description
        })
    },

    saveName () {
      if (this.selectedName.name === '' || this.selectedName.description === '') {
        return
      }

      if (this.selectedName.id === null || this.selectedName.id === '' || this.selectedName.id === 0) {
        this.createName(this.selectedName)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateName(this.selectedName)
          .then((result) => {
            this.fetchData()
          })
      }
    },

    delName () {
      if (this.selectedName.id === null || this.selectedName.id === '' || this.selectedName.id === 0) {
        return
      }

      this.deleteName(this.selectedName.id)
        .then((result) => {
          this.fetchData()
        })
    },

    clearForm () {
      this.selectedName.id = null
      this.selectedName.name = null
      this.selectedName.description = null
    }
  }, mapActions([
    'getNameById',
    'getAllNames',
    'updateName',
    'addNewName',
    'createName',
    'deleteName'
  ]))
}
</script>
