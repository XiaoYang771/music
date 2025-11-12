<script setup lang="ts">
import HomePageAside from './components/HomePageAside.vue';
import HomePageContent from './components/HomePageContent.vue';
import ButtomApiBtn from './components/ButtomApiBtn.vue';
</script>

<template>
  <div class="bg-container">
    <div class="main">
      <HomePageAside></HomePageAside>
      <HomePageContent></HomePageContent>
    </div>
  </div>
  <div class="footer">
    <ButtomApiBtn></ButtomApiBtn>
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
    height: 765px;
    overflow: hidden;
    background: url('/images/bg.webp') no-repeat center center/cover fixed;
    .main{
      display: flex;
      width: 90%;
      height: 700px;
      border-radius: 20px;
      background-color: rgb(52, 49, 49);
    }
  }
  .footer{
      position: fixed;
      width: 100%;
      height: 70px;
      bottom: 0;
      z-index: 10;
    }
</style>
