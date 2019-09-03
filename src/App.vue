<template>
  <div id="app">

    <!-- <theFirstPage></theFirstPage> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/Home/videoList">videoList</router-link> -->
    <header-content></header-content>


    
   
</div>

</template>

<script>
import theFirstPage from './views/fistPage.vue'
import headerContent from './components/theFirstPage/headerContent.vue'

export default {
  name: 'app',
  components: {
    theFirstPage,
    headerContent
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -8px;
  margin-bottom: 0px;
}
</style>
