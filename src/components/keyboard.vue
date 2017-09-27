<template>
  <div class="keyboard" v-show="isShow">
    <span class="keyboard-item" @click="tap" :data-num="1">1</span>
    <span class="keyboard-item" @click="tap" :data-num="2">2</span>
    <span class="keyboard-item" @click="tap" :data-num="3">3</span>
    <span class="keyboard-item" @click="tap" :data-num="4">4</span>
    <span class="keyboard-item" @click="tap" :data-num="5">5</span>
    <span class="keyboard-item" @click="tap" :data-num="6">6</span>
    <span class="keyboard-item" @click="tap" :data-num="7">7</span>
    <span class="keyboard-item" @click="tap" :data-num="8">8</span>
    <span class="keyboard-item" @click="tap" :data-num="9">9</span>
    <span class="keyboard-item"></span>
    <span class="keyboard-item" @click="tap" :data-num="0">0</span>
    <span class="keyboard-item" @click="del"></span>
  </div>
</template>

<script>
export default {
  name: 'keyboard',
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
	
  .keyboard {
    background-color: #fff;

    .keyboard-item {
      display: inline-block;
      box-sizing: border-box;
      width: 33.3333%;
      height: @keyboard-h;
      line-height: @keyboard-h;
      float: left;
      text-align: center;
      font-size: @keyboard-tx-size;
      color: @keyboard-tx-color;
      border-right: .01rem solid @keyboard-border-color;
      border-bottom: .01rem solid @keyboard-border-color;

      &:nth-child(3n) {
        border-right-color: transparent;
      }

      &:nth-child(10),&:nth-child(12) {
        background-color: @keyboard-bg-color;
      }
    }
  }
</style>
