<template>
  <div class="select" v-show="isShow">
    <div class="select-mask" @touchmove.prevent></div>
    <transition name="fade">
      <div class="select-main" v-if="isShow">
        <div class="select-title">标题</div>
        <div class="select-area">
          <div class="select-item">
            <input type="checkbox">
            <label>微信</label>
          </div>
          <div class="select-item">
            <input type="checkbox">
            <label>QQ</label>
          </div>
          <div class="select-item">
            <input type="checkbox">
            <label>淘宝</label>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'select',
  props: {
    nums: {
      type: Array,
      default: function() {
        return []
      }
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numbers: this.nums
    }
  },
  methods: {
    tap: function(e) {
      this.numbers.push(parseInt(e.target.dataset.num))
      this.$emit('keychange',this.numbers)
    },
    del: function() {
      this.numbers.pop()
      this.$emit('keychange',this.numbers)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import url('../assets/less/helper/_variable.less');
	
  .select-mask {
    position: fixed;
    z-index: @select-index;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @select-mask-color;
  }
  .select-main {
    position: fixed;
    z-index: @select-index;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;

    &.fade-enter-active, &.fade-leave-active {
      transition: all .5s ease
    }
       
    &.fade-enter, &.fade-leave-to {
      opacity: 0
    } 

    .select-title {
      height: @select-h;
      line-height: @select-h;
      background-color: #fff;
      font-size: @select-title-size;
      color: @select-title-color;
      text-align: center;
    }

    .select-area {
      height: 2*@select-h;
      overflow-y: auto;

      .select-item {
        height: @select-h;
        line-height: @select-h;
        background-color: #fff;
      }
    }
    
  }
</style>
