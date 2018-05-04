<template>
  <div id="app">
    <div><img src="./assets/logo.png"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  message: 'Welcome to BBLink!'
}
</script>
<style lang="scss">
@import "assets/sass/common/global";
@import "assets/sass/common/function";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: ptr(60);
  img{
    height:ptr(125);
    width:ptr(125);
  }
}
</style>
