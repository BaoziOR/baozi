<template>
  <div class="user">
      <div v-if="!loginStatus">
        <ul>
            <li><input type="text" ref="username"/></li>
            <li><input type="password" ref="password"/></li>
            <li>
                <button @click="handleLogin" ref="signin">Sign in</button>
                <div class="back">
                    <router-link :to="'/'">Home</router-link>
                </div>
            </li>
        </ul>
      </div>
      <div v-else>
          Welcome you Admin, thanks for coming!&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" @click="handleLogout">Logout</a>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    handleLogin () {
      const username = this.$refs.username
      const password = this.$refs.password
      if (username.value === 'admin' && password.value === 'admin') {
        this.$store.dispatch('setUserInfo')
      } else {
        alert('Sorry, User name and password are incorrect!')
      }
    },
    handleLogout () {
      this.$store.dispatch('setSignOut')
    },
    handleEnter () {
      /**
       * This is for fast testing
       */
      document.addEventListener('keyup', (event) => {
        event.preventDefault()
        if (event.keyCode === 13) {
          this.$refs.signin.click()
        }
      })
    }
  },
  mounted () {
    this.handleEnter()
  },
  computed: {
    ...mapGetters([
      'loginStatus'
    ])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/common/function";
input {
    border: 1px solid green;
    border-radius: ptr(15);
    margin-bottom: ptr(20);
    height: ptr(48);
    padding: 0 ptr(10);
    width: ptr(400);
}
button {
    background: green;
    border-radius: ptr(5);
    color: #fff;
    font-size: ptr(25);
    height: ptr(48);
    width: ptr(120);
}
.back{
    margin-top: ptr(20);
}
</style>
