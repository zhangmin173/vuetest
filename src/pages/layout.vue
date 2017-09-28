<template>
  <div>
    <div class="app-header">
      <v-header :title="headerTitle"></v-header>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <v-menu></v-menu>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/header'
import vMenu from '../components/menu'
export default {
  name: 'layout',
  components: {
    vHeader,
    vMenu
  },
  data() {
    return {
      headerTitle: '导航标题',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
@import url('../assets/less/helper/_variable.less');
body {
  font-family: 'Heiti SC', '\9ED1\4F53', SimHei, '黑体';
  height: 10000px;
}
</style>
