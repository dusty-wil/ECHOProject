<template>
  <section class="container">
    <h4>Profile</h4>

    <div class="tabbable tabs-left">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link" href="#pass" data-toggle="tab" role="tab">Change Password</a>
        </li>
      </ul>
      <div class="tab-content ">
        <div class="tab-pane" id="pass" role="tabpanel">
          <ChangePasswordForm></ChangePasswordForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ChangePasswordForm from './ChangePasswordForm.vue'

  export default {
    components: {
      ChangePasswordForm
    }
  }
</script>


<style scoped>

</style>
