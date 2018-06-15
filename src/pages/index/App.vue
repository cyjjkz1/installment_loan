<template>
  <div id="app">
    <div class="page_header">
      <img class="top_banner" :src="top_banner_url" alt="">
    </div>

    <div class="page_center">
      <div class="page_center_title">最高额度</div>
      <div class="page_center_value"><strong>{{max_load_amount}}</strong></div>
    </div>
    <div class="page_mid"><strong>已有</strong>
                          <span><strong>{{has_users_count}}</strong></span>
                          <strong>位用户获取了借款额度</strong>
    </div>
    <div class="page_bottom">
      <div class="page_bottom_button">查看额度</div>
    </div>
    <loading :show="show1" :text="loading_title"></loading>
    <alert v-model="show" :title="alert_msg"> {{ '还没啊~' }}</alert>
  </div>
</template>

<script>
  import { Loading, Alert } from 'vux'
  export default {
    name: 'App',
    components: {Loading, Alert},
    data () {
      return {
        top_banner_url: "https://www.baidu.com/img/bd_logo1.png?where=super",
        max_load_amount: "￥20000",
        has_users_count: 2304,
        show1: true,
        show: true,
        loading_title:"",
        alert_msg: "你吃饭了吗？"
      }
    }
  }
</script>

<!-- 使用less来写样式 -->
<!--
<style scoped lang="less" type="less" rel="stylesheet/less">


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }
  .testp{
    width: 300px;
    height: 150px;
    background: red;
  }
</style>-->

<!--  使用sass来写样式 -->
<style scoped lang="less" type="less" rel="stylesheet/less">
  @import "../../styles/less_styles/common";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }
  .page_header{
    width: 100%;
    .top_banner{
      width: 100%;
      height: 228px;
    }
  }
  .page_center{
    margin: 56px auto 0 auto;
    width: 426px;
    height: 426px;
    padding-top: 152px;
    background: url("../../assets/bk_edu_img.png");
    background-position: 100%;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    .page_center_title{
      margin: 0 auto;
      font-size: 28px;
      text-align: center;
      line-height: 32px;
      color: #131313;
    }
    .page_center_value{
      margin-top:46px;
      margin-left: auto;
      margin-right: auto;
      font-size: 62px;
      text-align: center;
      line-height: 64px;
      color: #fe9025;
    }
  }
  .page_mid{
    margin: 34px auto 0 auto;
    text-align: center;
    color: #131313;
    line-height: 28px;
    font-size: 26px;
    span{
      color: #fe9025;
    }
  }
  .page_bottom{
    margin: 174px auto 0 auto;
    width: 100%;
    .page_bottom_button{
      margin: 0 auto;
      width: 356px;
      height: 128px;
      font-size: 32px;
      color: white;
      line-height: 100px;
      text-align: center;
      background: url("../../assets/edu_check_img.png");
      background-position: 100%;
      -webkit-background-size: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
</style>

