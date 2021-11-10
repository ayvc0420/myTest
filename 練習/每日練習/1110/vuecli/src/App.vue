<template>
  <div id="app">
    <TitleTest :title="TitleTest" />
    <input-test :text.sync="TitleTest" />
    <!-- <input-test :text="TitleTest" @textchage="chageFn" /> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TitleTest from './components/Title.vue'
import InputTest from './components/InputTest/index.vue'

export default {
  name: 'App',
  data(){
    return{
      TitleTest:'this is title test. - 2021/11/10'
    }
  },
  components: {
    HelloWorld,
    TitleTest,
    InputTest
  },
  // methods: {
  //   chageFn(val){
  //     this.TitleTest = val
  //   }
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
