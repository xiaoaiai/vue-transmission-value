<template>
  <div class="hello">
    <div>父组件传过来的值：<span>{{parentVal}}</span></div>
    <button @click="transferValByEmit">通过$emit传值</button>
    <button @click="transferValByParent">通过$parent传值</button>
  </div>
</template>
<script>
export default {
  name: 'child',
  props: {
    parentVal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      childVal: 'childVal'
    }
  },
  methods: {
    transferValByEmit () {
      this.$emit('toParent', '$emit' + this.childVal)
    },
    transferValByParent () {
      this.$parent.exceptChild('$parent' + this.childVal)
    }
  }
}
</script>
<style scoped>
</style>
