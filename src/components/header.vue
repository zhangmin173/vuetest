<template>
  <div>
    <headroom :h="h">
      <div class="header" :style="{ lineHeight: h}">
        <a class="header-btn header-left" href="javascript:;" @click="left">返回</a>
        <span class="header-title">{{title}}</span>
        <a class="header-btn header-right" href="javascript:;" @click="right">首页</a>
      </div>
    </headroom>
  </div>
</template>

<script>
import headroom from '../components/headroom'
export default {
  name: 'header',
  props: {
    title: {
      type: String
    },
    leftUrl: {
      type: String
    },
    rightUrl: {
      type: String
    }
  },
  components: {
    headroom
  },
  data () {
    return {
      h: '1.2rem'
    }
  },
  methods: {
    left: function() {
      if (this.leftUrl) {
        window.location.href = this.leftUrl
      } else {
        window.history.back(-1)
      }
    },
    right: function() {
      console.log('首页')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import url('../assets/less/helper/_variable.less');
  
  .header {
    position: relative;
    height: 100%;
    background-color: @header-bg-color;

    .header-btn {
      position: absolute;
      top: 0;
      display: inline-block;
      width: @header-btn-w;
      height: 100%;
      text-align: center;
      text-decoration: none;
      color: @header-btn-color;

      &.header-left {
        left: 0;
      }

      &.header-right {
        right: 0;
      }
    }

    .header-title {
      position: absolute;
      left: @header-btn-w;
      right: @header-btn-w;
      height: 100%;
      display: inline-block;
      text-align: center;
      color: @header-title-color;
      font-size: @header-title-size;
    }
  }
</style>