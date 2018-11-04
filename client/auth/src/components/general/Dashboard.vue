<template>
<div>
<h1> Administration </h1>
<br>
<div>
<h3> Categories </h3>
<table>
<thead>
<tr>
<th>ID</th><th>Name</th><th>Description</th><th>Delete</th>
</tr>
</thead>
<tbody>
<tr v-for="cat in allCategories">
<td>{{cat.id}} </td> <td> {{cat.name}} </td> <td> {{cat.description}} </td><td><button v-on:click="deleteCategory(cat.id)">Delete</button></td>
</tr>
</tbody>
</table>
<label for="categoryName"> Name: </label> <input type="text" id="categoryName" name="categoryName" v-model='catName'></input>
<label for="categoryDescription"> Description: </label> <input type="text" id="categoryDescription" name="categoryDescription" v-model='catDescription'></input>
<button v-on:click="createCategory({name: catName, description: catDescription})">Create Category</button>
</div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Dashboard',
  data: () => ({
      catName: '',
      catDescription: ''
  }),
  methods: Object.assign({}, mapActions(['deleteCategory', 'createCategory'])),
  computed: Object.assign({
  }, mapActions(['getAllCategories']), mapGetters(['allCategories'])),
  mounted() {
      this.getAllCategories
  }
}
</script>
