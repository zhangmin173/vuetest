<template>
  <div class="headroom" :class="fixedClass" :style="{ height: h,transform: translateY }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'headroom',
  props: {
    h: {
      type: String,
      default: '1.2rem'
    },
    fixed: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      translateY: 0,
      scroller: window,
      lastKnownScrollY: 0,
      isSlideUp: false,
      isSlideDown: false
    }
  },
  computed: {
    fixedClass: function () {
      return 'fixed-' + this.fixed
    }
  },
  methods: {
    handleScroll: function() {
      if (this.scroller.pageYOffset > this.lastKnownScrollY) {
        this.isSlideUp = false
        this.isSlideDown = true
        if (this.fixed == 'top') {
          this.translateY = 'translate(0,-' + this.h + ')'
        } else {
          this.translateY = 'translate(0,' + this.h + ')'
        }
      } else {
        this.isSlideUp = true
        this.isSlideDown = false
        this.translateY = 'translate(0,0)'
      }
      this.lastKnownScrollY = this.getScrollY()
    },
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  },
  mounted () {
    this.scroller.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import url('../assets/less/helper/_variable.less');
  .headroom {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #eee;
    transition: all .5s;

    &.fixed-top {
      top: 0;
    }

    &.fixed-bottom {
      bottom: 0;
    }
  }
</style>