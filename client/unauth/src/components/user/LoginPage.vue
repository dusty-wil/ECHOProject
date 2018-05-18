<template>
  <div class="container">
    <div class="row">
      <div class="wrapper">

        <router-link to="/">
          <img src="../../../../shared/src/assets/img/logo.png" alt="ECHO">
        </router-link>
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
            </div>
            <div class="loginActions">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="rememberMe"> Remember Me?
                </label>
              </div>
              <span><router-link class='forgetPassword' to="/forgot_password">Forgot Password</router-link></span>
              <button class="btn btn-sm btn-main float-right" @click="submit">Enter</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  const REMEMBERED_USERNAME = 'REMEMBERED_USERNAME'
  const REMEMBERED_FLAG = 'REMEMBERED_FLAG'
  export default {
    data: () => ({
      username: window.localStorage.getItem(REMEMBERED_USERNAME),
      password: '',
      rememberMe: Boolean(window.localStorage.getItem(REMEMBERED_FLAG))
    }),
    methods: {
      submit () {
        window.localStorage.setItem(REMEMBERED_FLAG, this.rememberMe)
        if (this.rememberMe) {
          window.localStorage.setItem(REMEMBERED_USERNAME, this.username)
        } else {
          window.localStorage.removeItem(REMEMBERED_USERNAME)
        }
      }
    }
  }
</script>
