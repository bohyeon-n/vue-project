<template>
<div class="app">

  <router-view id="content"/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@main-color: rgb(233, 235, 238);
.app {
  background: @main-color;
  position: relative;
}
body {
  background: @main-color;
}
</style>
