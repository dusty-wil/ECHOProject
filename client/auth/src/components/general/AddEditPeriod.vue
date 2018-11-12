<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Dates</h2>
            <div class="attributeListContainer">
                <h6>Active Dates</h6>
                <ul class="selectAttributeList" id="selectPeriod">
                    <li v-for="period in this.periodList" v-on:click="selectPeriod(period.id)">
                        {{period.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editPeriodForm">
                <label class="editFormLbl" for="periodName">Date Name:</label>
                <input type="text" class="editFormTxt" id="periodName" v-model="selectedPeriod.name" placeholder="Date Name"/>

                <label class="editFormLbl" for="periodDesc">Date Description:</label>
                <input type="text" class="editFormTxt" id="periodDesc" v-model="selectedPeriod.description" placeholder="Date Description"/>

                <input type="hidden" id="periodId" v-model="selectedPeriod.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="savePeriod">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delPeriod">Delete</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    periodList: null,
    selectedPeriod: {
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
      'allPeriods'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllPeriods()
        .then((result) => {
          this.periodList = this.allPeriods
          this.clearForm()
        })
    },

    selectPeriod (periodId) {
      this.getPeriodById(periodId)
        .then((result) => {
          this.selectedPeriod.id = result.id
          this.selectedPeriod.name = result.name
          this.selectedPeriod.description = result.description
        })
    },

    savePeriod () {
      if (this.selectedPeriod.name === '' || this.selectedPeriod.description === '') {
        return
      }

      if (this.selectedPeriod.id === null || this.selectedPeriod.id === '' || this.selectedPeriod.id === 0) {
        this.createPeriod(this.selectedPeriod)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updatePeriod(this.selectedPeriod)
          .then((result) => {
            this.fetchData()
          })
      }
    },

    delPeriod () {
      if (this.selectedPeriod.id === null || this.selectedPeriod.id === '' || this.selectedPeriod.id === 0) {
        return
      }

      this.deletePeriod(this.selectedPeriod.id)
        .then((result) => {
          this.fetchData()
        })
    },

    clearForm () {
      this.selectedPeriod.id = null
      this.selectedPeriod.name = null
      this.selectedPeriod.description = null
    }
  }, mapActions([
    'getPeriodById',
    'getAllPeriods',
    'updatePeriod',
    'addNewPeriod',
    'createPeriod',
    'deletePeriod'
  ]))
}
</script>
