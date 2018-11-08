<template>
    <div class="container">
        <div class="row">
            <h2 class="pageTitle">ECHO System Administration</h2>
			Edit Stories and Supporting Data
            <ul class="dashboardLinks">
                <li><router-link to="/AddEditSubject">Add/Edit Subjects</router-link></li>
                <li><router-link to="/AddEditCategory">Add/Edit Categories</router-link></li>
                <li><router-link to="/AddEditName">Add/Edit Names</router-link></li>
                <li><router-link to="/AddEditPeriod">Add/Edit Dates</router-link></li>
                <li><router-link to="/AddEditLocation">Add/Edit Location</router-link></li>
                <li><router-link to="/AddEditStory">Add/Edit Stories</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data: () => ({})
}
</script>
