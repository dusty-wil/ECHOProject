<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">Add/Edit Categories</h2>
            <div class="attributeListContainer">
                <h6>Active Categories</h6>
                <ul class="selectAttributeList" id="selectCategory">
                    <li v-for="category in this.categoryList" v-on:click="selectCategory(category.id)">
                        {{category.name}}
                    </li>
                </ul>
            </div>
            <form class="editAttributeForm" id="editCategoryForm">
                <label class="editFormLbl" for="categoryName">Category Name:</label>
                <input type="text" class="editFormTxt" id="categoryName" v-model="selectedCategory.name" placeholder="Category Name"/>
                
                <label class="editFormLbl" for="categoryDesc">Category Description:</label>
                <input type="text" class="editFormTxt" id="categoryDesc" v-model="selectedCategory.description" placeholder="Category Description"/>
                
                <input type="hidden" id="categoryId" v-model="selectedCategory.id" value=""/>
                <button class="formBtn saveBtn"  v-on:click="saveCategory">Save</button>
                <button class="formBtn clearBtn" v-on:click="clearForm" type="reset">Cancel</button>
                <button class="formBtn delBtn"  v-on:click="delCategory">Delete</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },

  data: () => ({
    categoryList: null,
    selectedCategory: {
      id: null,
      name: null,
      description: null
    },
  }),
  
  mounted() {
    // this.getAllCategories
    this.fetchData()
  },

  created () {
    // this.fetchData()
  },

  computed: Object.assign(
    mapGetters([
      'allCategories'
    ])
    // I can't get this method to reload the category list
    // mapActions([
    //   'getAllCategories'
    // ])
  ),
  
  methods: Object.assign({
    fetchData () {
      this.getAllCategories()
        .then((result) => {
          this.categoryList = this.allCategories
        })
    },
    selectCategory (categoryId) {
      this.getCategoryById(categoryId)
        .then((result) => {
          this.selectedCategory.id = result.id
          this.selectedCategory.name = result.name
          this.selectedCategory.description = result.description
        })
    },
    saveCategory () {
      if (this.selectedCategory.name === '' || this.selectedCategory.description === '') {
        return
      }
 
      if (this.selectedCategory.id === null || this.selectedCategory.id === '' || this.selectedCategory.id === 0) {
        this.createCategory(this.selectedCategory)
          .then((result) => {
            this.fetchData()
          })
      } else {
        this.updateCategory(this.selectedCategory)
          .then((result) => {
            this.fetchData()
          })
      }
    },
    delCategory () {
      if (this.selectedCategory.id === null || this.selectedCategory.id === "" || this.selectedCategory.id === 0) {
        return
      }
      this.deleteCategory(this.selectedCategory.id)
        .then((result) => {
          this.fetchData()
        })
    },
    clearForm () {
      this.selectedCategory.id = null
      this.selectedCategory.name = null
      this.selectedCategory.description = null
    }
  },
  mapActions([
    'getCategoryById',
    'getAllCategories',
    'updateCategory',
    'addNewCategory',
    'createCategory',
    'deleteCategory'
  ]))
}
</script>
