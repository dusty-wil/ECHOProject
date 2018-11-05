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

<br>

<div>
<h3> Periods </h3>
<table>
<thead>
<tr>
<th>ID</th><th>Name</th><th>Description</th><th>Delete</th>
</tr>
</thead>
<tbody>
<tr v-for="per in allPeriods">
<td>{{per.id}} </td> <td> {{per.name}} </td> <td> {{per.description}} </td><td><button v-on:click="deletePeriod(per.id)">Delete</button></td>
</tr>
</tbody>
</table>
<label for="periodName"> Name: </label> <input type="text" id="periodName" name="periodName" v-model='perName'></input>
<label for="periodDescription"> Description: </label> <input type="text" id="periodDescription" name="periodDescription" v-model='perDescription'></input>
<button v-on:click="createPeriod({name: perName, description: perDescription})">Create Period</button>
</div>

<br>

<div>
<h3> Subjects </h3>
<table>
<thead>
<tr>
<th>ID</th><th>Name</th><th>Description</th><th>Delete</th>
</tr>
</thead>
<tbody>
<tr v-for="sub in allSubjects">
<td>{{sub.id}} </td> <td> {{sub.name}} </td> <td> {{sub.description}} </td><td><button v-on:click="deleteSubject(sub.id)">Delete</button></td>
</tr>
</tbody>
</table>
<label for="subjectName"> Name: </label> <input type="text" id="subjectName" name="subjectName" v-model='subName'></input>
<label for="subjectDescription"> Description: </label> <input type="text" id="subjectDescription" name="subjectDescription" v-model='subDescription'></input>
<button v-on:click="createSubject({name: subName, description: subDescription})">Create Subject</button>
</div>

<br>

<div>
<h3> Themes </h3>
<table>
<thead>
<tr>
<th>ID</th><th>Name</th><th>Description</th><th>Delete</th>
</tr>
</thead>
<tbody>
<tr v-for="them in allThemes">
<td>{{them.id}} </td> <td> {{them.name}} </td> <td> {{them.description}} </td><td><button v-on:click="deleteTheme(them.id)">Delete</button></td>
</tr>
</tbody>
</table>
<label for="themeName"> Name: </label> <input type="text" id="themeName" name="themeName" v-model='themName'></input>
<label for="themeDescription"> Description: </label> <input type="text" id="themeDescription" name="themeDescription" v-model='themDescription'></input>
<button v-on:click="createTheme({name: themName, description: themDescription})">Create Theme</button>
</div>

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Dashboard',
  data: () => ({
      catName: '',
      catDescription: '',
      perName: '',
      perDescription: '',
      subName: '',
      subDescription: '',
      themName: '',
      themDescription: ''
  }),
  methods: Object.assign({}, mapActions(['deleteCategory', 'createCategory', 'deletePeriod', 'createPeriod', 'deleteTheme', 'createTheme', 'deleteSubject', 'createSubject'])),
  computed: Object.assign({
  }, mapActions(['getAllCategories', 'getAllPeriods', 'getAllSubjects', 'getAllThemes']), mapGetters(['allCategories', 'allPeriods', 'allSubjects', 'allThemes'])),
  mounted() {
      this.getAllPeriods
      this.getAllCategories
      this.getAllThemes
      this.getAllSubjects
  }
}
</script>
