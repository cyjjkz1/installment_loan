<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <p class="testp">卡啥地方加大沙发斯蒂芬阿斯蒂芬</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- 使用less来写样式 -->
<style scoped lang="less" type="less" rel="stylesheet/less">
  .testp{
    width: 300px;
    height: 150px;
    background: red;
  }
</style>

<!--  使用sass来写样式
<style scoped lang="scss" type="scss" rel="stylesheet/scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  .testp{
    width: 300px;
    height: 150px;
    background: red;
  }

</style>
-->
