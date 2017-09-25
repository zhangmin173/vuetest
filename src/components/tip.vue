<template>
  <div class="pop" v-show="isShow">
    <div class="pop-mask"></div>
    <transition name="fade">
      <div class="tip-main" v-show="isShow">
        {{msg}}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'tip',
  props: {
    msg: {
      type: String,
      default: '发生未知错误'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import url('../assets/less/helper/_variable.less');
	.pop-mask {
    position: fixed;
    z-index: @pop-index;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @pop-mask-color;
  }
  .tip-main {
    position: fixed;
    z-index: @pop-index;
    left: 50%;
    top: 50%;
    width: @pop-w;
    transform: translate(-50%,-50%);
    background-color: #000;
    text-align: center;
    color: #fff;
  }
</style>