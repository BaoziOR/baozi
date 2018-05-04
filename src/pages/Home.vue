<template>
  <div class="home">
      <h1>This is Home page!</h1>
      <Helloword></Helloword>
      <router-link :to="'signin'">Sign in</router-link>
  </div>
</template>

<script>
import Helloword from '@/components/HelloWorld'
export default {
  components: {
    Helloword
  },
  data () {
    return {
      msg: 'home'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/common/function";
h1{
  margin-bottom: ptr(50)
}
.home {
  margin-top: ptr(50)
}
</style>
