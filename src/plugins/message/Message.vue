<template>
  <transition name="fade">
    <div class="message" v-if="show">
      {{msg}}
    </div>
  </transition>
</template>

<script>
  export default{
    data () {
      return {
        msg: '',
        show: false
      }
    }
  }
</script>

<style lang="less">
  .message{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    line-height: 64px;
    color: #67c23a;
    background-color: #f0f9eb;
  }
</style>
