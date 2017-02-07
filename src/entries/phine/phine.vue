<template>
    <div id="app" class="ga">
        <a href="/home">home</a>
        <a href="/topic">topic</a>
        <a href="/poem">poem</a>
        <a href="/counter">counter</a>
        <router-link to="/show">show</router-link>
        <router-link to="/model">model</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
<style src="assets/css/index.css"></style>
<style lang="less" scoped>
  .ga {
    color: #666;
  }
      a {
    margin-left: 10px;
    color: #1c6132;
    font-size: 24px;
     &:hover {
         text-decoration: underline;
     }
    }

</style>