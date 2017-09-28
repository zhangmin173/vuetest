<template>
  <div class="pop" v-show="isShow">
    <div class="pop-mask"></div>
    <transition name="fade">
      <div class="pop-main" v-if="isShow">
        <div class="pop-hd">{{title}}</div>
        <div class="pop-bd">{{msg}}</div>
        <div class="pop-btns">
          <div class="pop-btn pop-cancel" @click="cancel">{{btns[1]}}</div>
          <div class="pop-btn pop-confirm" @click="confirm">{{btns[0]}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'pop',
  props: {
    title: {
      type: String
    },
    msg: {
      type: String,
      default: '发生未知错误'
    },
    btns: {
      type: Array,
      default: ['确定', '取消']
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    confirm: function() {
      this.$emit('confirm')
    },
    cancel: function() {
      this.$emit('cancel')
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

.pop-main {
  position: fixed;
  z-index: @pop-index;
  left: 50%;
  top: 50%;
  width: @pop-w;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: @pop-radius;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all .5s ease
  }

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0
  }

  .pop-hd {
    padding: @pop-guter;
    text-align: center;
    font-size: @pop-title-size;
    color: @pop-title-color;
  }

  .pop-bd {
    padding: @pop-guter @pop-guter @pop-guter*2;
    font-size: @pop-msg-size;
    border-bottom: 1px solid @pop-border-color;
    color: @pop-msg-color;
  }

  .pop-btns {
    display: flex;

    .pop-btn {
      flex: 1;
      height: @pop-btn-h;
      line-height: @pop-btn-h;
      text-align: center;
      font-size: @pop-btn-size;
      color: @pop-btn-color;
    }

    .pop-cancel {
      border-right: 1px solid @pop-border-color;
    }

    .pop-confirm {
      color: @pop-btn-confirm-color;
    }
  }
}
</style>
