<template>
  <div class="hello">
    <Child :parentVal="toChild" @toParent="exceptChild"></Child>
    <div>子组件传过来的值：<span>{{childValue}}</span></div>
  </div>
</template>
<script>
import Child from '@/components/child'
export default {
  name: 'parent',
  components: {
    Child
  },
  data () {
    return {
      toChild: 'parentVal',
      childValue: ''
    }
  },
  methods: {
    exceptChild (childValue) {
      this.childValue = childValue
    }
  }
}
</script>
<style scoped>
</style>
