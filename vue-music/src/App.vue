<script setup lang="ts">
import HomePageAside from './components/HomePageAside.vue';
import HomePageContent from './components/HomePageContent.vue';
</script>

<template>
  <div class="bg-container">
    <div class="main">
      <HomePageAside></HomePageAside>
      <HomePageContent></HomePageContent>
    </div>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    user-select: none;
  }
  .bg-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 745px;
    .main{
      display: flex;
      width: 90%;
      height: 700px;
      border-radius: 20px;
      background-color: rgb(52, 49, 49);
    }
  }
</style>
