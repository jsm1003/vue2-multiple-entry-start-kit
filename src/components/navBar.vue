<template>
    <div>
        <router-link to="/home">home</router-link>
        <router-link to="/topic">topic</router-link>
        <a href="/poem">poem</a>
        <a href="/counter">counter</a>
        <a href="/show">show</a>
        <a href="/model">model</a>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    a {
    margin-left: 10px;
    color: #1c6132;
    font-size: 24px;
     &:hover {
         text-decoration: underline;
     }
    }
    
</style>