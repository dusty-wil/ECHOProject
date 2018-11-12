<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Locations</h2>
            <div class="attributeListContainer">
                <h6>Active Locations</h6>
                <ul class="selectAttributeList" id="selectLocation">
                    <li v-for="location in this.locationList" v-on:click="selectLocation(location.id)">
                        {{location.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editLocationForm">
                <label class="editFormLbl" for="locationName">Name:</label>
                <input type="text" class="editFormTxt" id="locationName" v-model="selectedLocation.name" placeholder="Location Name"/>
                
                <label class="editFormLbl" for="locationDesc">Location Description:</label>
                <input type="text" class="editFormTxt" id="locationDesc" v-model="selectedLocation.description" placeholder="Location Description"/>
                
                <input type="hidden" id="locationId" v-model="selectedLocation.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="saveLocation">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delLocation">Delete</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    locationList: null,
    selectedLocation: {
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
      'allLocations'
    ])
  ),

  methods: Object.assign({
    fetchData () {
      this.getAllLocations()
        .then((result) => {
          this.locationList = this.allLocations
          this.clearForm()
        })
    },

    selectLocation (locationId) {
      this.getLocationById(locationId)
        .then((result) => {
          this.selectedLocation.id = result.id
          this.selectedLocation.name = result.name
          this.selectedLocation.description = result.description
        })
    },

    saveLocation () {
      if (this.selectedLocation.name === '' || this.selectedLocation.description === '') {
        return
      }

      if (this.selectedLocation.id === null || this.selectedLocation.id === '' || this.selectedLocation.id === 0) {
        this.createLocation(this.selectedLocation)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateLocation(this.selectedLocation)
          .then((result) => {
            this.fetchData()
          })
      }
    },

    delLocation () {
      if (this.selectedLocation.id === null || this.selectedLocation.id === '' || this.selectedLocation.id === 0) {
        return
      }
      this.deleteLocation(this.selectedLocation.id)
        .then((result) => {
          this.fetchData()
        })
    },

    clearForm () {
      this.selectedLocation.id = null
      this.selectedLocation.name = null
      this.selectedLocation.description = null
    }
  }, mapActions([
    'getLocationById',
    'getAllLocations',
    'updateLocation',
    'addNewLocation',
    'createLocation',
    'deleteLocation'
  ]))
}
</script>
