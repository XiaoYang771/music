<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="aside">
        <div class="headshot">
            <img src="../assets/headshot.jpeg" alt="">
        </div>
        <ul>
            <li><RouterLink to="/likemusic">我的喜欢</RouterLink></li>
            <li><RouterLink to="/addmusic">添加歌单</RouterLink></li>
            <li><RouterLink to="/musictalk">音乐评论</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .aside{
        width: 20%;
        height: 96%;
        background-color: cadetblue;
        border-radius: 20px 0 0 20px;
        margin: 1% 0 1% 1%;
        .headshot{
            width:230px;
            height: 230px;
            margin: 0 auto;
            border-bottom: 3px solid black;
            img{
                width:230px;
                height: 230px;
                border-radius: 50%;
            }
        }
        ul{
            margin-top: 50px;
            li{
            width: 100%;
            height: 50px;
            list-style: none;
            line-height: 50px;
            text-align: center;
                a{
                display: block;
                width: 100%;
                height: 50px;
                color: #fff;
                text-decoration: none;
                }
            }
        }
    }
</style>