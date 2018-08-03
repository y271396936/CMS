<template>
  <section class="about-block">
    <h1 class="title">MES每实 ︱ 用爱与热情重新定义蛋糕</h1>
    <title-desc :title="titleTextObj1.title" :textArr="titleTextObj1.textArr"></title-desc>
    <food-materials></food-materials>
    <title-desc :title="titleTextObj2.title" :textArr="titleTextObj2.textArr"></title-desc>
    <banner :imgUrl="imgUrl"></banner>
    <title-desc :title="titleTextObj3.title" :textArr="titleTextObj3.textArr"></title-desc>
  </section>
</template>

<script>
import TitleDesc from 'modules/titleDesc'
import FoodMaterials from 'components/foodMaterials'
import Banner from 'modules/banner'

export default {
  name: 'about-block',
  data() {
    return {
      imgUrl: require('images/banner3.jpg'),
      titleTextObj1: {
        title: '全世界的好食材',
        textArr: [
          {
            text: '纵使温室技术与培植技术再怎么发达，也无法取代食物所在地的原汁原味。',
            isRed: 0
          },
          {
            text: 'MES每实在全世界挑选大自然最本真、最质朴的美味食材。所有原材料均来自其最佳产地。',
            isRed: 1
          },
          {
            text: '这不仅是一种因地制宜，更是顺应，尊重自然的健康之道',
            isRed: 0
          },
          {
            text: '土耳其的榛子、新西兰的奇异果、泰国的金枕榴莲、牙买加的摩根船长朗姆酒、还有上品的白兰地……',
            isRed: 0
          },
          {
            text: '食材在MES每实的意义，不仅是味蕾的满足，更是一种心灵的邂逅。',
            isRed: 0
          }
        ]
      },
      titleTextObj2: {
        title: '全世界的好食材',
        textArr: [
          {
            text: '法国人说：“人有两个胃，一个用来吃饭，一个用来吃甜点。”',
            isRed: 0
          },
          {
            text: '100%新西兰、德国纯乳脂奶油，100%比利时纯天然巧克力，是蛋糕最纯正的选择，成就MES的独特甜蜜。 忘不了的甜，是一种无法抗拒的诱惑',
            isRed: 0
          },
          {
            text: 'MES每实的每一种色彩，均萃取自天然食材。漫长的提取过程，像一场静默的修行：过滤杂色，汲取精华，食材在流金岁月里精雕细琢，愈发纯粹。',
            isRed: 0
          }
        ]
      },
      titleTextObj3: {
        title: '最美的时光 用力爱一场',
        textArr: [
          {
            text: '当我们谈论蛋糕的时候，我们在谈论美食、味道、还是心情？当爱情降临，当事业擢升，当亲朋团聚……',
            isRed: 0
          },
          {
            text: '当每一个美好的时刻发生，都值得欢呼，都应当庆祝。',
            isRed: 0
          },
          {
            text: '让食物拥有幸福的味道，让记忆刻上甜蜜的烙印。',
            isRed: 0
          },
          {
            text: '让生命中的每一个特殊时刻， MES每实陪伴。',
            isRed: 0
          }
        ]
      }
    }
  },
  components: {
    TitleDesc,
    FoodMaterials,
    Banner
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.about-block {
  .title {
    padding: 20px 0 50px;
    text-align: center;
    font-size: 28px;
  }
}
</style>
