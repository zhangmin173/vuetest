<template>
  <div>
    <v-pop :is-show="isShowPop" :title="title" :msg="msg" :btns="btns" @confirm="ok" @cancel="no"></v-pop>
    <button @click="pop">弹窗</button>
    <br>
    <p>{{nums}}</p>
    <v-keyboard :is-show="isShowKeyboard" @keychange="keychange" :nums="nums"></v-keyboard>
    <button @click="keyboard">键盘</button>

    <v-select :is-show="isShowSelect"></v-select>
  </div>
</template>

<script>
import vPop from '../components/pop'
import vKeyboard from '../components/keyboard'
import vSelect from '../components/select'
export default {
  name: 'home',
  components: {
    vPop,
    vKeyboard,
    vSelect
  },
  data() {
    return {
      title: '系统提示',
      msg: '确定要删除吗?',
      btns: ['确定', '算了'],
      isShowPop: false,
      isShowKeyboard: false,
      nums: [1, 2],
      isShowSelect: true
    }
  },
  methods: {
    ok: function() {
      this.isShowPop = false
      console.log('ok')
    },
    no: function() {
      this.isShowPop = false
      console.log('no')
    },
    pop: function() {
      this.isShowPop = true
    },
    keyboard: function() {
      this.isShowKeyboard = true
    },
    keychange: function(d) {
      this.nums = d
    }
  }
}
</script>
<style lang="less">
body {
  padding-top: 98px;
}
</style>
<style lang="less" scoped>
button {
  width: 1rem;
  height: .5rem;
  text-align: center;
  line-height: .5rem;
}
</style>
