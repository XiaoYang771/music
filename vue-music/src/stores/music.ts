import { defineStore } from "pinia"
import { ref,onMounted } from 'vue'
//引入解析lrc歌词的函数
import { parseLrc } from '@/utils/lrcParser'

export const useMusicStore = defineStore('music',() => {
    //声明歌曲列表的属性类型(已掌握)
    interface musictype {
        id:number
        name:string
        singers:string
        img:string
        src:string
        videoSrc?:string
        time:number
        like:boolean
        isplay:boolean,
        lyric:string
    }
    //声明存储歌曲列表(ref类型声明未掌握)
    const MusicList = ref<Array<musictype>>([
        {
            id:0,
            name:'不将就',
            singers:'李荣浩',
            img:'/images/onemusic.jpeg',
            src:"/audio/不将就.mp3",
            videoSrc:'/video/不将就MV.mp4',
            time:5.13,
            like:false,
            isplay:false,
            lyric:`
            [00:00.00]不将就 - 李荣浩 (Ronghao Li)
            [00:02.00]词：李荣浩/黄伟文
            [00:05.00]曲：李荣浩
            [00:07.00]编曲:Edward Chan
            [00:10.00]制作人：李荣浩
            [00:13.00]那时候 我以为爱的是生活
            [00:19.00]也算懂得 什么适合什么不可
            [00:26.00]最近还是一样努力着
            [00:30.00]配合你的性格
            [00:33.00]你的追求者 你的坎坷
            [00:36.00]我开的车
            [00:40.00]算一算 虚度了多少个年头
            [00:46.00]仿佛足够写一套错爱的春秋
            [00:53.00]如果以后 你还想为谁
            [00:56.00]浪费美好时候
            [00:59.00]眼泪只能在我的胸膛
            [01:03.00]毫无保留
            [01:10.00]互相折磨到白头
            [01:16.00]悲伤坚决不放手
            [01:23.00]开始纠缠之后
            [01:28.00]才又被人放大了自由
            [01:37.00]你的暴烈太温柔
            [01:43.00]感情又痛又享受
            [01:50.00]如果我说不吻你不罢休
            [01:56.00]谁能逼我将就
            [02:06.00]你问我 为什么顽固而专一
            [02:13.00]天下太大 总有人比你更合适
            [02:19.00]其实我觉得这样不值
            [02:23.00]可没选择方式
            [02:26.00]你一出场别人都显得不过如此
            [02:35.00]互相折磨到白头
            [02:41.00]悲伤坚决不放手
            [02:48.00]开始纠缠之后
            [02:53.00]才又被人放大了自由
            [03:01.00]你的暴烈太温柔
            [03:08.00]感情又痛又享受
            [03:15.00]如果我说不吻你不罢休
            [03:21.00]谁能逼我将就
            [03:58.00]互相折磨到白头
            [04:04.00]悲伤坚决不放手
            [04:12.00]开始纠缠之后
            [04:16.00]才又被人放大了自由
            [04:25.00]你的暴烈太温柔
            [04:31.00]感情又痛又享受
            [04:38.00]如果我说不吻你不罢休
            [04:44.00]谁能逼我将就
            [04:51.00]他们不过将就

            `
        },
        {
            id: 1,
            name: '爱错',
            singers: '王力宏',
            img: '/images/twomusic.webp',
            src: '/audio/爱错.mp3',
            videoSrc: '/video/爱错MV.mp4',
            time: 3.58,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]爱错 - 王力宏 (Leehom Wang)
            [00:04.00]词：王力宏/崔惟楷
            [00:09.00]曲：王力宏
            [00:14.00]北风毫不留情
            [00:18.00]把叶子吹落
            [00:21.00]脆弱的她选择了逃脱
            [00:27.00]叶子失去消息
            [00:30.00]风才感觉寂寞
            [00:36.00]整个冬天 北风的痛没人能说
            [00:46.00]我从来没想过我会这样做
            [00:52.00]从来没爱过所以爱错
            [00:59.00]我从哪里起飞
            [01:02.00]从哪里降落
            [01:06.00]多少不能原谅的错
            [01:09.00]却不能重来过
            [01:20.00]翻开回忆角落完美的生活
            [01:26.00]以为幸福都可以掌握
            [01:33.00]仔细回味当初那个故事背后
            [01:42.00]Oh 原来是我 原来是我
            [01:45.00]犯下从没承认的错
            [01:51.00]我从来没想过我会这样做
            [01:58.00]从来没爱过所以爱错
            [02:04.00]我从哪里起飞从哪里降落
            [02:11.00]多少不能原谅的错
            [02:15.00]却不能重来过
            [02:23.00]在这少了你的世界 Oh
            [02:29.00]找不回那些感觉
            [02:34.00]其实我不想道别那些过去
            [02:44.00]我从来没想过我会这样做
            [02:51.00]从来没爱过所以爱错
            [02:55.00]从来没有爱过那么认真
            [02:58.00]我从哪里起飞
            [03:00.00]从哪里降落
            [03:04.00]多少不能原谅的错
            [03:07.00]却不能重
            [03:10.00]我从来没想过我会这样做
            [03:17.00]从来没爱过所以爱错
            [03:24.00]我从哪里起飞
            [03:27.00]从哪里降落
            [03:30.00]多少不能原谅的错
            [03:34.00]请你原谅我的爱错
            `
        },
        {
            id: 2,
            name: '其实',
            singers: '薛之谦',
            img: '/images/threemusic.webp',
            src: '/audio/其实.mp3',
            videoSrc: '/video/其实MV.mp4',
            time: 4.02,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]其实 - 薛之谦
            [00:06.00]词：薛之谦
            [00:12.00]曲：薛之谦
            [00:18.00]不需要借口
            [00:21.00]爱淡了就放手
            [00:26.00]我不想听
            [00:28.00]你也没说平静的交错
            [00:35.00]随便找个理由
            [00:38.00]决定了就别回头
            [00:43.00]不爱你的人
            [00:45.00]说什么都没用
            [00:51.00]分开时难过不能说
            [00:55.00]谁没谁不能好好过
            [00:59.00]那天我们走了很久
            [01:02.00]没有争吵过
            [01:08.00]分开时难过不要说
            [01:12.00]如果被你一笑而过
            [01:16.00]还不如让你选择
            [01:19.00]想要的生活
            [01:24.00]分开后我会笑着说
            [01:28.00]当朋友问你关于我
            [01:33.00]我都会轻描淡写
            [01:36.00]仿佛没爱过
            [01:41.00]其实我根本没人说
            [01:45.00]其实我没你不能活
            [01:50.00]其实我给你的爱
            [01:52.00]比你想的多
            [02:32.00]分开时难过不能说
            [02:36.00]谁没谁不能好好过
            [02:40.00]那天我们走了很久
            [02:43.00]没有争吵过
            [02:48.00]分开时难过不要说
            [02:53.00]如果被你一笑而过
            [02:57.00]还不如让你选择
            [03:00.00]想要的生活
            [03:03.00]wow wow
            [03:05.00]分开后我会笑着说
            [03:10.00]当朋友问你关于我
            [03:14.00]我都会轻描淡写
            [03:17.00]仿佛没爱过
            [03:22.00]其实我根本没人说
            [03:26.00]其实我没你不能活
            [03:31.00]其实我给你的爱
            [03:33.00]比你想的多
            [03:39.00]其实我爱你比你
            [03:42.00]想的多得多

            `
        },
        {
            id: 3,
            name: '如果呢',
            singers: '郑润泽',
            img: '/images/fourmusic.jpg',
            src: '/audio/如果呢.mp3',
            videoSrc: '/video/如果呢MV.mp4',
            time: 4.17,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00] 作词 : 郑润泽
            [00:01.00] 作曲 : 郑润泽
            [00:02.00]编曲 : 赵建飞
            [00:03.00]制作人 : 李淘 / 赵建飞
            [00:09.07]出品：网易音乐人 X 青云LAB
            [00:12.51]
            [00:13.75]
            [00:21.84]
            [00:34.10]看
            [00:35.74]幻想中的行星
            [00:38.06]平行与天际
            [00:41.83]听
            [00:43.44]你说过的话语
            [00:45.61]是那么平静
            [00:48.62]
            [00:49.43]能记得我的好
            [00:52.83]也能够忘掉我
            [00:55.61]迟早
            [00:56.70]我的心里仍屹立着座城堡
            [01:02.39]
            [01:04.07]不知为何
            [01:06.33]无法感受得到
            [01:09.93]你的不舍
            [01:12.54]你是如何能够
            [01:14.81]轻易做得到
            [01:18.91]
            [01:20.72]如果说是真的爱我
            [01:24.37]那为何都说不出口
            [01:27.26]一大堆的所以然呢
            [01:32.10]我脑海只剩为什么
            [01:34.66]就让我
            [01:36.02]放下所有回忆
            [01:38.93]所有事情不那么清晰
            [01:43.48]也许
            [01:45.46]会好
            [01:47.51]比较
            [01:50.07]
            [02:14.91]看
            [02:16.53]幻想中的行星
            [02:18.71]平行与天际
            [02:22.46]听
            [02:23.93]你说过的话语
            [02:26.30]是那么平静
            [02:29.53]
            [02:30.07]说记得我的好
            [02:33.58]也能够忘掉我
            [02:35.55]迟早
            [02:37.35]数不清这是第几次
            [02:40.53]我也不知道
            [02:43.08]
            [02:44.13]如果说是真的爱我
            [02:49.34]那为何都说不出口
            [02:53.33]一大堆的所以然呢
            [02:57.32]我脑海只剩为什么
            [02:59.88]就让我
            [03:01.13]放下所有回忆
            [03:04.02]所有事情不那么清晰
            [03:08.59]也许
            [03:10.04]会好
            [03:12.53]比较
            [03:15.30]
            [03:17.08]如果说是真的爱我
            [03:20.48]那为何都说不出口
            [03:24.29]一大堆的所以然呢
            [03:28.15]我脑海只剩为什么
            [03:30.62]就让我
            [03:32.22]放下所有回忆
            [03:35.18]所有事情不那么清晰
            [03:39.60]也许
            [03:41.03]会好
            [03:43.69]比较
            [03:47.48]也许
            [03:49.27]会好
            [03:52.80]比较
            [03:57.29]出品：青桔音乐
            [03:58.62]编曲 : 赵建飞
            [03:59.36]吉他：周少伟
            [03:59.46]和声编写:曾婕Joey.Z
            [04:01.18]和声演唱:曾婕Joey.Z
            [04:02.04]人声录音师：赵野
            [04:03.14]人声录音棚:3RD Harmonic Music
            [04:03.67]弦乐编写：赵建飞
            [04:04.26]弦乐监制：李朋
            [04:05.55]弦乐：国际首席爱乐乐团
            [04:06.51]弦乐录音棚：金田录音棚
            [04:07.56]混音师：钟泽鑫
            [04:08.48]企划：潘俊
            [04:09.45]营销企划：罗旭 牛雪吟
            [04:10.40]
            [04:12.53] 网易云音乐特别企划“星辰集”出品
            `
        },
        {
            id: 4,
            name: '关键词',
            singers: '林俊杰',
            img: '/images/fivemusic.jpg',
            src: '/audio/关键词.mp3',
            time: 3.30,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]关键词 - 林俊杰 (JJ Lin)
            [00:03.00]词：林怡凤
            [00:07.00]曲：林俊杰
            [00:10.00]编曲：吴庆隆
            [00:14.00]好好爱自己
            [00:15.00]就有人会爱你
            [00:17.00]这乐观的说词
            [00:21.00]幸福的样子
            [00:22.00]我感觉好真实
            [00:24.00]找不到形容词
            [00:28.00]沉默在掩饰
            [00:29.00]快泛滥的激情
            [00:31.00]只剩下语助词
            [00:35.00]有一种踏实
            [00:36.00]当你口中喊我名字
            [00:40.00]落叶的位置
            [00:44.00]谱出一首诗
            [00:47.00]时间在消逝
            [00:50.00]我们的故事开始
            [00:54.00]这是第一次
            [00:58.00]让我见识爱情
            [01:01.00]可以慷慨又自私
            [01:05.00]你是我的关键词
            [01:21.00]我不太确定
            [01:22.00]爱最好的方式
            [01:24.00]是动词或名词
            [01:28.00]很想告诉你
            [01:29.00]最赤裸的感情
            [01:31.00]却又忘词
            [01:35.00]聚散总有时
            [01:36.00]而哭笑也有时
            [01:38.00]我不怕潜台词
            [01:42.00]有一种踏实
            [01:43.00]是你心中有我名字
            [01:47.00]落叶的位置
            [01:51.00]谱出一首诗
            [01:54.00]时间在消逝
            [01:57.00]我们的故事开始
            [02:02.00]这是第一次
            [02:05.00]让我见识爱情
            [02:08.00]可以慷慨又自私
            [02:12.00]你是我的关键词
            [02:17.00]你藏在歌词
            [02:21.00]代表的意思
            [02:24.00]是专有名词
            [02:30.00]落叶的位置
            [02:33.00]谱出一首诗
            [02:37.00]我们的故事
            [02:40.00]才正要开始
            [02:44.00]这是第一次
            [02:47.00]爱一个人爱的
            [02:50.00]如此慷慨又自私
            [02:54.00]你是我的关键词

            `
        },
        {
            id: 5,
            name: '可惜没如果',
            singers: '林俊杰',
            img: '/images/sixmusic.webp',
            src: '/audio/可惜没如果.mp3',
            videoSrc:'/video/可惜没如果MV.mp4',
            time: 4.58,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]可惜没如果 - 林俊杰 (JJ Lin)
            [00:01.00]词：林夕
            [00:03.00]曲：林俊杰
            [00:04.00]编曲：蔡政勋
            [00:06.00]制作人：许环良
            [00:07.00]吉他:Jamie Wilson
            [00:09.00]鼓:Brendan Buckley
            [00:10.00]贝斯:Kelly Wan
            [00:12.00]和声：林俊杰
            [00:13.00]和声编写:Billy Koh/林俊杰
            [00:15.00]配唱制作人：许环良
            [00:17.00]混音工程师：许环良
            [00:18.00]录音师:Billy Koh/李志清/Brendan Buckley/Shawn McGhee
            [00:20.00]录音室:THE JFJ LAB(Taipei)/Bloom Studio(Malaysia)/Hideout Studio(LV)
            [00:21.00]弦乐：周莹/周麓/印文竹/陈华超
            [00:23.00]混音室:Tweak Tone Labs(Beijing)
            [00:24.00]假如把犯得起的错
            [00:28.00]能错的都错过
            [00:30.00]应该还来得及去悔过
            [00:36.00]假如没把一切说破
            [00:40.00]那一场小风波 将一笑带过
            [00:47.00]在感情面前 讲什么自我
            [00:52.00]要得过且过 才好过
            [00:59.00]全都怪我
            [01:01.00]不该沉默时沉默 该勇敢时软弱
            [01:07.00]如果不是我
            [01:10.00]误会自己洒脱 让我们难过
            [01:17.00]可当初的你 和现在的我
            [01:20.00]假如重来过
            [01:23.00]倘若那天
            [01:25.00]把该说的话好好说
            [01:28.00]该体谅的不执着
            [01:31.00]如果那天我
            [01:34.00]不受情绪挑拨
            [01:37.00]你会怎么做
            [01:41.00]那么多如果 可能如果我
            [01:44.00]可惜没如果 只剩下结果
            [02:17.00]如果早点了解
            [02:19.00]那率性的你
            [02:22.00]或者晚一点
            [02:25.00]遇上成熟的我
            [02:28.00]不过 oh
            [02:32.00]全都怪我
            [02:34.00]不该沉默时沉默 该勇敢时软弱
            [02:40.00]如果不是我
            [02:43.00]误会自己洒脱 让我们难过
            [02:50.00]可当初的你 和现在的我
            [02:53.00]假如重来过
            [02:55.00]倘若那天
            [02:58.00]把该说的话好好说
            [03:01.00]该体谅的不执着
            [03:04.00]如果那天我
            [03:07.00]不受情绪挑拨
            [03:10.00]你会怎么做
            [03:14.00]那么多如果 可能如果我
            [03:17.00]可惜没如果 没有你和我
            [03:32.00]都怪我
            [03:34.00]不该沉默时沉默 该勇敢时软弱
            [03:40.00]如果不是我
            [03:43.00]误会自己洒脱 让我们难过
            [03:50.00]可当初的你 和现在的我
            [03:53.00]假如重来过
            [03:56.00]倘若那天
            [03:58.00]把该说的话好好说
            [04:01.00]该体谅的不执着
            [04:04.00]如果那天我
            [04:07.00]不受情绪挑拨
            [04:10.00]你会怎么做
            [04:14.00]那么多如果 可能如果我
            [04:17.00]可惜没如果
            [04:22.00]只剩下结果
            [04:28.00]可惜没如果
            `
        },
        {
            id: 6,
            name: '我看过',
            singers: '小野来了',
            img: '/images/sevenmusic.webp',
            src: '/audio/我看过.mp3',
            time: 2.34,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]小野来了-我看过（亲爱的不要再说你还爱我）
            [00:00.00]作词: 曾歆沂/黄政彬/周星星
            [00:00.00]作曲: 吴周烁/佳旺/周星星
            [00:00.00]亲爱的不要再说你还爱我
            [00:03.00]因为看过你爱我的样子
            [00:16.00]你的回答都犹豫了一下
            [00:24.00]在我面前怎么开始害怕说错话
            [00:31.00]你在眺望窗外无关的景象
            [00:36.00]保持沉默和你的优雅
            [00:46.00]想陪你假装没事
            [00:50.00]天真把分开延迟
            [00:54.00]现实却比我们诚实
            [01:01.00]我看过你说好一辈子
            [01:05.00]我看过你的无微不至
            [01:09.00]我看过你说想要时间停止
            [01:13.00]拉着我的手喊我名字
            [01:16.00]我看过你说谎的方式
            [01:20.00]我看过爱情自然变质
            [01:24.00]就算错过这样到此为止
            [01:32.00]至少我看过你爱我的样子
            [01:37.00]沉默空气戳破你的心事
            [01:41.00]你难过伤心又有几次
            [01:45.00]你脸上的陌生表情
            [01:47.00]是你给的诠释
            [01:51.00]我看着你飘忽的心思
            [01:54.00]也看见我无谓的坚持
            [01:58.00]亲爱的不要再说你还爱我
            [02:02.00]因为看过你爱我的样子
            [02:06.00]我看过的最美的落日
            [02:10.00]是你陪我看海的样子
            [02:14.00]就算错过这样到此为止
            [02:21.00]至少我看过你爱我的样子
            `
        },
        {
            id: 7,
            name: '孤独患者',
            singers: '陈奕迅',
            img: '/images/eightmusic.webp',
            src: '/audio/孤独患者.mp3',
            time: 4.33,
            like: false,
            isplay: false,
            lyric: `
            [00:00.00]孤独患者 (国) - 陈奕迅
            [00:05.00]词：小寒
            [00:08.00]曲：方大同
            [00:11.00]编曲：方大同/陈浩然
            [00:17.00]欢笑声欢呼声
            [00:20.00]吵热气氛心却很冷
            [00:24.00]聚光灯是种蒙恩
            [00:27.00]我却不能喊等一等
            [00:31.00]我真佩服我还能幽默
            [00:35.00]掉眼泪时用笑掩过
            [00:38.00]怕人看破顾虑好多
            [00:42.00]不谈寂寞我们就都快活
            [00:48.00]我不唱声嘶力竭的情歌
            [00:55.00]不表示没有心碎的时刻
            [01:02.00]我不曾摊开伤口任宰割
            [01:08.00]愈合就无人晓得
            [01:13.00]我内心挫折
            [01:16.00]活像个孤独患者自我拉扯
            [01:24.00]外向的孤独患者有何不可
            [01:39.00]笑越大声越是残忍
            [01:43.00]挤满体温室温更冷
            [01:47.00]万一关灯空虚扰人
            [01:50.00]我却不能喊等一等
            [01:54.00]你说你爱我却一直说
            [01:57.00]说我不该窝在角落
            [02:01.00]策划逃脱这也有错
            [02:04.00]连我脆弱的权利都掠夺
            [02:10.00]我不唱声嘶力竭的情歌
            [02:17.00]不表示没有心碎的时刻
            [02:24.00]我不曾摊开伤口任宰割
            [02:30.00]愈合就无人晓得
            [02:35.00]我内心挫折
            [02:39.00]活像个孤独患者自我拉扯
            [02:46.00]外向的孤独患者有何不可
            [03:21.00]我不要声嘶力竭的情歌
            [03:28.00]来提示我需要你的时刻
            [03:35.00]表面镇定并不是保护色
            [03:41.00]反而是要你懂得
            [03:46.00]我不知为何
            [03:50.00]活像个孤独患者自我拉扯
            [03:56.00]外向的孤独患者需要认可
            `
        },
        {
            id: 8,
            name: '离开我的依赖',
            singers: '王艳薇',
            img: '/images/ninemusic.webp',
            src: '/audio/离开我的依赖.mp3',
            videoSrc: '/video/离开我的依赖MV.mp4',
            time: 3.53,
            like: false,
            isplay: false,
            lyric: `
           [00:00.00]离开我的依赖 (Leaving) - 王艳薇
            [00:02.00]词：王艳薇
            [00:03.00]曲：王艳薇
            [00:10.00]说不出你的轮廓
            [00:17.00]看着你的模样
            [00:25.00]眼前的美风雨冲淡了它
            [00:32.00]看天色渐暗了
            [00:40.00]好陌生的一句话
            [00:47.00]你看着我说话
            [00:55.00]我蒙上了眼
            [00:59.00]仿佛你在身旁
            [01:02.00]当你不再应答
            [01:09.00]我来不及道声不安
            [01:12.00]有点混乱有点缓慢
            [01:16.00]才发现承诺是谎话
            [01:20.00]你倒下了我只能旁观
            [01:24.00]我越来越爱
            [01:26.00]爱不爱
            [01:28.00]都成为我们的负担
            [01:32.00]我想要痛快的离开我的依赖
            [01:49.00]一句句你的责骂
            [01:55.00]是存在的代价
            [02:03.00]不想让我慌乱认痛责备的话
            [02:11.00]看天再一次暗了
            [02:18.00]我来不及道声不安
            [02:21.00]有点混乱有点缓慢
            [02:25.00]才发现承诺是谎话
            [02:29.00]你倒下了我只能旁观
            [02:33.00]我越来越爱
            [02:35.00]爱不爱
            [02:37.00]都成为我们的负担
            [02:40.00]我想要痛快的离开我的依赖
            [02:48.00]多少个忍受痛的夜晚你叫我别回来
            [02:56.00]我挣扎看你的脸憔悴的心怎放得开
            [03:07.00]我来不及道声不安
            [03:10.00]有点混乱有点缓慢
            [03:14.00]才发现承诺是谎话
            [03:18.00]你倒下了我只能旁观
            [03:22.00]我越来越爱
            [03:24.00]爱不爱
            [03:26.00]都成为我们的负担
            [03:30.00]我想要痛快的离开我的依赖
            [03:37.00]我想要痛快的离开我的依赖
            `
        },
    ])
//数据
    //声明播放列表---后续音乐都要根据播放列表变量进行播放
    const playList = ref<Array<musictype>>([])
    //声明歌曲索引(掌握)
    const currentIndex = ref(0) 
    //声明歌曲是否播放变量(掌握)
    let isPlaying = ref(false)
    //创建新的audio对象
    const audio = new Audio()
    //声明歌词数据
    const lyrics = ref<Lyric[]>([])
    //当前歌词索引
    const currentLrcIndex = ref(-1)
    //音频当前播放时间
    const currentAudioTime = ref(0)
    //音频当前播放时间
    let time = ref()
    const finallyMusicIndex = ref(0)
//方法
    const setLyrics = (lrcText: string) => {
        lyrics.value = parseLrc(lrcText).filter(lyric => lyric.text);
    };
    
    //自定义歌曲是否播放(解决)
    // audio.src = playList.value[0]!.src || ''
    const isinitialization = ref(false) //是否初始化
    const handlePlay = () => {
        if (playList.value.length !== 0) {
            isPlaying.value = !isPlaying.value
            
            setLyrics(playList.value[0]!.lyric) //更新歌词
            if(!isinitialization.value){
                audio.src = playList.value[0]!.src
                isinitialization.value = true
            }
            if (isPlaying.value) {
                audio.play()
                setLyrics(playList.value[0]!.lyric) //更新歌词
            }else{
                audio.pause()
            }
        }
    }
    //封装自动播放下一首或上一首(解决)
    const switchToNextMusic = () => {
    //    isplayList()
       if(playList.value.length !== 0){
           isPlaying.value = true  //将暂停改为播放
           currentIndex.value = (currentIndex.value + 1) % playList.value.length   //找到下一首歌索引
           audio.src = playList.value[currentIndex.value]!.src //根据索引进行播放
           audio.play()    //播放
           const currentMusic = playList.value[currentIndex.value] //获得下一首歌
           const newLrcText: string = currentMusic!.lyric ?? ''   //获得下一首歌的歌词
           setLyrics(newLrcText)   //更改为新歌词
           currentLrcIndex.value = -1  //重置歌词索引
           currentAudioTime.value = 0  //重置音频时间

       }
       
    }
    const switchToPreMusic = () => {
        if (playList.value.length !== 0) {
            isPlaying.value = true
            currentIndex.value = (currentIndex.value - 1 + playList.value.length) % playList.value.length
            audio.src = playList.value[currentIndex.value]!.src
            audio.play()
            const currentMusic = playList.value[currentIndex.value];
            const newLrcText: string = currentMusic!.lyric ?? '';
            setLyrics(newLrcText);
            currentLrcIndex.value = -1;
            currentAudioTime.value = 0;
        }
    }
    
    audio.addEventListener('timeupdate', () => {
        function formatSecondsToMS(totalSeconds: number) {
            // 计算分钟数（不补零）
            const minutes = Math.floor(totalSeconds / 60);
            // 计算剩余秒数（补两位）
            const seconds = totalSeconds % 60;
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            return `${formattedMinutes}.${formattedSeconds}`;
        }
        time.value = formatSecondsToMS(Math.floor(audio.currentTime))
    })

    onMounted(() => {
        // 1. 解析歌词并存入 Pinia
        const lrcText = playList.value[currentIndex.value]?.lyric ?? '';
        setLyrics(lrcText);
        // 2. 时间更新时同步到 Pinia
        audio.addEventListener('timeupdate', () => {
            updateAudioTime(audio.currentTime);
        });
    });
   

    const playMusicById = (index:number) => {

        // 2. 更新当前索引
        if(playList.value.length > 0){
        currentIndex.value = index
        
        // 3. 切换音频源并控制播放
        audio.src = playList.value[index]!.src;
        isPlaying.value = true;

            // 先清空之前的事件监听（避免重复监听）
            audio.removeEventListener('canplay', handleCanPlay);
            // 注册 canplay 事件，音频可播放时执行 play
            audio.addEventListener('canplay', handleCanPlay);

            function handleCanPlay() {
                audio.play();
                // 播放后移除事件监听
                audio.removeEventListener('canplay', handleCanPlay);
            }


        // 4. 解析并更新歌词（如果有需要）
        const lyricText = playList.value[index]!.lyric || '';
        setLyrics(lyricText);
        }else{
            audio.pause()
            audio.currentTime = 0
            isPlaying.value = false
            setLyrics('')
        }
    };
    
//--------------------------------------------------------------------------
    interface Lyric {
        time: number,
        text: string
    }
   
    

    // 解析歌词并更新到 Pinia
    // const setLyrics = (lrcText: string) => {
    //     lyrics.value = parseLrc(lrcText).filter(lyric => lyric.text);
    // };
    // 更新音频时间并匹配歌词索引
    const updateAudioTime = (time: number) => {
        currentAudioTime.value = time;
        // 匹配歌词索引逻辑（移至 Pinia，统一处理）
        const index = lyrics.value.findIndex((item, i) => {
            const nextTime = lyrics.value[i + 1]?.time || Infinity;
            return time >= item.time && time < nextTime;
        });
        currentLrcIndex.value = index;
    };
        
    const MusicListLike = ref<Array<musictype>>([])
    //声明喜欢列表歌曲，从本地里面取
    // const LikeMusicList = ref<musictype[]>(JSON.parse(localStorage.getItem('MusicListLike')||'[]'))
    // 读取本地存储并兜底
    const storeLikeList = localStorage.getItem('MusicListLike') || '[]'
    // 解析为数组
    const parseLikeList = JSON.parse(storeLikeList)
    // 定义 ref
    const LikeMusicList = ref<musictype[]>(parseLikeList)

    const stepOneMusic = localStorage.getItem('MusicList')
    const stepTwoMusic = stepOneMusic ? JSON.parse(stepOneMusic) : MusicList
    const finallyMusic = ref<musictype[]>(stepTwoMusic)
    
        return {
            MusicList, lyrics,
            currentLrcIndex,
            currentAudioTime,
            setLyrics,
            updateAudioTime,
            switchToNextMusic,
            switchToPreMusic,
            currentIndex, isPlaying, audio, handlePlay, time, playMusicById, MusicListLike,LikeMusicList,playList,finallyMusic,finallyMusicIndex
}
})
