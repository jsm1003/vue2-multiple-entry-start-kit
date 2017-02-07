<template>
  <div id="app" class="ga">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import navBar from '~components/navBar'

export default {
  components: {
    navBar
  }
}
</script>
<style>
@import "~assets/css/index.css";
  .ga {
    color: #666;
  }

</style>

