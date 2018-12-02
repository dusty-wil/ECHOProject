<template>
  <div class="container">
    <div class="row">
      <div class="wrapper">
        <div class="loginWrapper">
          <h2>Login</h2>
          <form action='/login' method="POST">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="username" class="form-control" name="username" id="username"  v-model="username" v-on:input='username = $event.target.value'>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" id="password"  v-model="password" v-on:input='password = $event.target.value'>
              <span><a class='forgotPasswordLink' v-on:click="fp">Forgot Password?</a></span>
            </div>
            <div class="loginActions">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="rememberMe"> Remember Me?
                </label>
              </div>
              <button class="formBtn loginBtn" @click="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
const REMEMBERED_USERNAME = 'REMEMBERED_USERNAME'
const REMEMBERED_FLAG = 'REMEMBERED_FLAG'

export default {
  data: () => ({
    username: window.localStorage.getItem(REMEMBERED_USERNAME),
    password: '',
    rememberMe: Boolean(window.localStorage.getItem(REMEMBERED_FLAG))
  }),
  methods: Object.assign({
    submit () {
      window.localStorage.setItem(REMEMBERED_FLAG, this.rememberMe)
      if (this.rememberMe) {
        window.localStorage.setItem(REMEMBERED_USERNAME, this.username)
      } else {
        window.localStorage.removeItem(REMEMBERED_USERNAME)
      }
    },

    fp () {
      if (!this.username || this.username == '') {
        alert('Please enter your username to reset your password')
        return
      }
      this.forgotPassword({'username': this.username})
        .then((res) => {
          if (res.error) {
            alert(res.error)
          } else {
            alert(
              'Password reset request sent. Please check your email for instructions. '
              + 'If you don\'t see the email right away, be sure to check your spam folder.'
            )
          }
        })
    }
  },

  mapActions([
    'forgotPassword'
  ]))
}
</script>
