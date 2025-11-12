<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useMusicStore } from '@/stores/music';
//引入歌曲pinia的数据
const MusicStore = useMusicStore()
//引入路由
const route = useRoute()
//定义路由传过来的ID变量
const ID = Number(route.query.id)
//定义当前的MV歌曲
const nowMusicVideo = MusicStore.MusicList.find(music => music.id === ID)
const isVideoSrc = ref(nowMusicVideo?.videoSrc)  
</script>

<template>
   <div class="videoBox">
        <div class="video">
            <video v-if="isVideoSrc" loop controls playsinline>
                <source :src="`${nowMusicVideo?.videoSrc}`" type="video/mp4">
            </video>
            <p v-else>
                <span>该歌曲暂无MV哦~</span><br>
                <img src="/images/zanwu.png" alt="">
            </p>
        </div>
        <div class="otherVideoBox">
            <h3>其他MV</h3>
            <div class="otherVideo">
                <div class="otherVideoLeft"></div>
                <ul>
                    <li v-for="(music,index) in MusicStore.MusicList">
                        
                    </li>
                </ul>
                <div class="otherVideoRight"></div>
            </div>
        </div>
   </div>
</template>

<style scoped lang="scss">
    .videoBox{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        width: 99%;
        height: 800px;
        background-color: rgba(0,0,0,0.5);
        .video{
            width: 90%;
            height: 100%;
            margin: 5%;
            video{
                position: absolute;
                left: 0;
                width: 100%;
                height: 60%;
            }
            p{
                font-size: 30px;
                text-align: center;
                margin-top: 100px;
                img{
                    margin-top: 20px;
                }
            }
        }
        .otherVideoBox{
            position: absolute;
            bottom:0;
            width: 90%;
            height: 30%;
            margin: 2% 0 3% 0;
            background-color: rgba(0,0,0,0.7);
            .otherVideo{
                position: relative;
                width: 100%;
                height: 137.77px;
                overflow: hidden;
                .otherVideoLeft{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 20px;
                    height: 100%;
                    background-color: aqua;
                }
                ul{
                    position: absolute;
                    top: 0;
                    left: 20px;
                    width: 2000px;
                    height: 137.77px;
                    li{
                        float: left;
                        width: 200px;
                        height: 130.77px;
                        margin-left: 13px;
                        margin-top: 3px;
                        list-style: none;
                    }
                }
                .otherVideoRight{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 20px;
                    height: 100%;
                    background-color: aqua;
                }
            }
        }
    }
</style>