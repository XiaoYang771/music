<script setup lang="ts">

</script>

<template>
    <div class="content">
        <header>
            <div class="userInfo">
                <p>云村村民1689432910</p>
                <hr>
                <p>关注 1 粉丝 1</p>
                <p>地区: 四川省 德阳市</p>
            </div>
        </header>
        <nav>
            <ul>
                <li>歌单</li>
                <li>收藏</li>
            </ul>
        </nav>
        <div class="userMain">
            <h3>我创建的歌单</h3>
            <ul>
                <li><img src="/images/headshot.jpeg" alt=""></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .content{
        width: 99%;
        height: 100%;
        color: #fff;
        header{
            width: 100%;
            height: 30%;
            .userInfo{
                padding-top: 50px;
                margin-left: 50px;
                :first-child{
                    font-size: 20px;
                    font-weight: 600;
                }
                :nth-child(2){
                    margin-top: 10px;
                    font-size: 14px;
                }
                :last-child{
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
        nav{
            width: 100%;
            height: 50px;
            ul{
                display: flex;
                li{
                    width: 100px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    list-style: none;
                }
            }
        }
        .userMain{
            width: 100%;
            height: 100%;
            h3{
                padding-left: 30px;
            }
            ul{
                display: flex;
                li{
                    width: 200px;
                    height: 200px;
                    margin: 10px;
                    border-radius: 20px;
                    list-style: none;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 20px;
                    }
                }
            }
        }
    }
</style>