<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="content">
        <div class="contentvideo">
            <video class="bg-video" autoplay muted loop playsinline>
                <source src="../assets/bg.mp4" type="video/mp4">
            </video>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped lang="scss">
    .content{
        width: 78%;
        height: 96%;
        margin: 1% 0;
        border-radius: 0 20px 20px 0;
        overflow-y: scroll;
        // background-color: chartreuse;
        .contentvideo{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .bg-video{
                position: absolute;
                width: 100%;
                height: 100%;
                transform: scaleY(1.2);
                // z-index: -1; /* 视频层级低于内容，确保内容可见 */
            }
        }
    }
</style>