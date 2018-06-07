<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer.jsx'
import todo from './components/todo'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    Header,
    Footer,
    todo
  }
}
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #aaa;
  opacity: .9;
  z-index: -1;
}
</style>
