<template>
  <div id="app" class="ga">
        <a href="/home">home</a>
        <a href="/topic">topic</a>
        <router-link to="/poem">poem</router-link>
        <router-link to="/counter">counter</router-link>
        <a href="/show">show</a>
        <a href="/model">model</a>
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
