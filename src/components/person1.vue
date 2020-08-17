<template>
  <div>
    这是person1的页面
    {{$route.name}}
    {{$route.params.id}}
    <hr>
    {{$route.params.id}}
    {{$route.params.username}}
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
