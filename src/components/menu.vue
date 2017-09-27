<template>
  <div class="menu">
    <a class="menu-item" v-for="item in btns" :href="item.url">{{item.name}}</a>
  </div>
</template>

<script>
import headroom from '../components/headroom'
export default {
  name: 'menu',
  props: {
    btns: {
      type: Array,
      default: function () {
        return [
          {
            name: '首页',
            url: '/'
          },
          {
            name: '我的',
            url: '/my'
          }
        ]
      }
    }
  },
  components: {
    headroom
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import url('../assets/less/helper/_variable.less');
  
  .menu {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.28rem;
    line-height: 1.28rem;
    background-color: #555;

    .menu-item {
      flex: 1;
      display: inline-block;
      height: 100%;
      text-align: center;
      color: #fff;
    }
  }
</style>