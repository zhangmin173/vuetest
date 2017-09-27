<template>
  <div>
    hello
  </div>
</template>

<script>
import vPop from '../components/pop'
export default {
  name: 'home',
  components: {
    vPop,
  },
  data () {
    return {
      title: '系统提示',
      msg: '确定要删除吗?',
      btns: ['确定','算了'],
      isShowPop: false,
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
