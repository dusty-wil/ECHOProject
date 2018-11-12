<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="currentPassword">Current Password</label>
          <input type="password"  id="currentPassword" name='currentPassword' v-model="form.currentPassword">
        </div>
        <div class="form-group">
          <label for="newPassword">New Password</label>
          <input type="password"  id="newPassword" name='newPassword' v-model='form.newPassword'>
        </div>
        <div class="form-group">
          <label for="newPasswordConfirmation">Verify Password</label>
          <input type="password"  id="newPasswordConfirmation" name='newPasswordConfirmation' v-model='form.newPasswordConfirmation'>
        </div>
        <button type="submit" class="btn btn-primary " :disabled="!canSubmit" @click="submit" aria-describedby="submitMessage">Update</button>
          <transition name="fade">
            <span id="submitMessage" class="text-muted" v-if="showMessage">Password changed!</span>
          </transition>
        </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''
    },
    showMessage: false
  }),

  computed: {
    canSubmit () {
      const noFieldsBlank = ((this.form.currentPassword.trim() !== '') &&
        (this.form.newPassword.trim() !== '') &&
        (this.form.newPasswordConfirmation.trim() !== ''))

      const newPasswordsMatch = (this.form.newPassword === this.form.newPasswordConfirmation)

      return (noFieldsBlank && newPasswordsMatch)
    }
  },

  methods: Object.assign({
    submit () {
      this.updatePassword(this.form)
        .then(() => {
          this.form.currentPassword = ''
          this.form.newPassword = ''
          this.form.newPasswordConfirmation = ''
          this.showMessage = true
          setTimeout(() => {
            this.showMessage = false
          }, 8000)
        })
    }
  }, mapActions(['updatePassword']))
}
</script>
