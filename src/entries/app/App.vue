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
<style src="~assets/css/index.css"></style>
<style>
  .ga {
    color: #666;
  }

</style>

