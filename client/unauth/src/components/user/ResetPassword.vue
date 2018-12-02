<template>
    <div class="container">
        <div class="row">
            <div class="wrapper">
                <h2>Reset Password</h2>
                <div class="resetPassword">
                    <template v-if="(!resetConf && !resetFail) || resetRetry">
                        <p>
                          Ensure your password is at least 8 characters long, has at least one upper-case character, and one number.
                        </p>
                        <template v-if="resetRetry">
                            <ul id="resetPasswordErrs" class="formErrors">
                                <li v-for="error in this.resetPasswordErrors">&bull; {{error}}</li>
                            </ul>
                        </template>
                        <div class="form-group">
                            <label for="password">New password:</label>
                            <input type="password" class="form-control" name="password" id="password"  v-model="resetReq.password" v-on:input='resetReq.password = $event.target.value'>
                        </div>
                        <div class="form-group">
                            <label for="passwordConf">Confirm Password:</label>
                            <input type="password" class="form-control" name="passwordConf" id="passwordConf"  v-model="resetReq.passwordConf" v-on:input='resetReq.passwordConf = $event.target.value'>
                        </div>
                        <div class="loginActions">
                            <button class="formBtn loginBtn" @click="submit">Update Password</button>
                        </div>
                    </template>
                    <template v-if="resetConf && !resetFail">
                        <div class="resetResult">
                            <p>Your password has been reset! You can now log in with your new password.</p>
                        </div>
                    </template>
                    <template v-if="resetConf && resetFail">
                        <div class="resetResult">
                            <p>Unable to reset password at this time. Please try again later.</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    resetReq: {
      token: '',
      password: '',
      passwordConf: ''
    },
    resetConf: false,
    resetFail: false,
    resetRetry: false,
    resetPasswordErrors: []
  }),

  methods: Object.assign({
    submit () {
      this.retryReset()

      if (!this.$route.params.token || this.$route.params.token == '') {
        this.resetPasswordErrors.push('Token is invalid or expired. Please try your request again.')
      }

      if (this.resetReq.password !== this.resetReq.passwordConf) {
        this.resetPasswordErrors.push('Passwords do not match. Please check your passwords and try again.')
      }
      if (this.resetReq.password.length < 8) {
        this.resetPasswordErrors.push('Your password must be at least 8 characters long')
      }

      var hasUC = false
      var hasNum = false
      var i = 0

      while (i < this.resetReq.password.length) {
        var c = this.resetReq.password.charAt(i)
        if (!isNaN(parseInt(c, 10))) {
          hasNum = true
        } else if (c === c.toUpperCase() && isNaN(parseInt(c, 10))) {
          hasUC = true
        }
        i++
      }

      if (!hasUC || !hasNum) {
        this.resetPasswordErrors.push('Your password does not meet the minimum requirements. Please pick another password.')
      }

      if (this.resetPasswordErrors.length > 0) {
        this.resetRetry = true
        this.resetForm()
        return
      }

      this.resetReq.token = this.$route.params.token

      this.resetPassword(this.resetReq)
        .then((res) => {
          if (res.error && res.error.length > 0) {
            this.resetConf = false
            this.resetFail = true
            this.resetRetry = true
            this.resetPasswordErrors = res.error
          } else {
            if (!isNaN(res) && res == 1) {
              this.resetConf = true
              this.resetFail = false
              this.resetRetry = false
            } else {
              this.resetConf = true
              this.resetFail = true
              this.resetRetry = false
            }
          }
          this.resetForm()
        })
    },

    resetForm () {
      this.resetReq.token = ''
      this.resetReq.password = ''
      this.resetReq.passwordConf = ''
    },

    retryReset () {
      this.resetConf = false
      this.resetFail = false
      this.resetRetry = false
      this.resetPasswordErrors = []
    }
  },

  mapActions([
    'resetPassword'
  ]))
}
</script>
