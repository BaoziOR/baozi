<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">
       <img v-bind:src=item.picUrl />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to BBLink App !',
      list: []
    }
  },
  methods: {
    getList () {
      this.$http.get('banner/list?type=home&_=1520416625859')
        .then((result) => {
          this.list = result.data.data
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/common/function";
h1 {
  margin-bottom: ptr(30)
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
