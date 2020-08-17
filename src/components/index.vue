<template>
    <div>
      这是首页
      <router-link to="/hellos">去hello页面</router-link>
      <router-link to="/person/index">去个人主页</router-link>
      <router-link :to="{name:'person1',params:{id:1}}">去个人主页person1</router-link>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
