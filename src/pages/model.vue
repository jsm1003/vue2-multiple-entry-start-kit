<template>
    <div>
        <input v-model="msg">
        <div class="msg">{{ msg }}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'write something'
            }
        }
    }
</script>
<style scoped>
    .msg {
        font-size: 24px;
    }
</style>