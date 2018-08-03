<template>
  <section class="log-area">
    <log :logArr="logArr"></log>
  </section>
</template>

<script>
import Log from 'modules/log'

export default {
  name: 'log-area',
  data() {
    return {
      logArr: [
        {
          id: 100,
          imgUrl: require('images/mesLog/log002-1.png'),
          time: '2016年12月07日',
          title: '腾讯维密秀&MES每实︱我愿意向着你的完美更进一步',
          text: 'MES每实蛋糕进驻腾讯视频，和出席“腾讯维密直播启动仪式”的嘉宾与维密天使们一起为腾讯视频的朋友们献上了一场甜蜜的感官冲击，著名天使奚梦瑶也来到了活动现场，引发了好几轮粉丝尖叫和合影！'
        },
        {
          id: 101,
          imgUrl: require('images/mesLog/log007-1.png'),
          time: '2016年4月29日',
          title: '为了爱️️♥，遇见电影节！',
          text: '每年春天，北京最引人注目的文化界盛事非北京国际电影节莫属了，迄今已成功举办六届的它给四月的北京带来一种全新的生活的美好。'
        },
        {
          id: 102,
          imgUrl: require('images/mesLog/log005-1.png'),
          time: '2016年8月3日',
          title: '腾讯维密秀&MES每实︱我愿意向着你的完美更进一步',
          text: '爱琴海微咸的海风，威尼斯河上尖尖的小船，比萨斜塔的落日余晖，白桃酿造的贝利尼酒，优美的旋律和浪漫的情调的音乐，还有AL BANO的歌声。如果你在意大利，如果你热爱意大利音乐，你一定知道他！'
        }
      ]
    }
  },
  components: {
    Log
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.log-area {
  overflow: hidden;
  background: $white;
}
</style>
