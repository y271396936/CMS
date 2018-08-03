<template>
  <section class="log-wrapper container">
    <h1 class="title">MES 日志</h1>
    <p class="sub-title">每实 最新情报</p>
    <ul class="log-list">
      <li class="log-item" v-for="(item, index) in logArr" :key="index">
        <img class="log-img" v-lazy="item.imgUrl" width="336" height="200">
        <div class="item-info">
          <p class="time">
            <i class="icon"></i>
            {{item.time}}
          </p>
          <p class="title">{{item.title}}</p>
          <em class="bock-line"></em>
          <p class="text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'log',
  props: {
    logArr: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgUrl: require('images/mesLog/log002-1.png')
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "~style/variable.styl"

.log-wrapper {
  padding: 60px 0 100px;
  .title {
    text-align: center;
    font-size: 40px;
  }
  .sub-title {
    margin: 10px 0 50px;
    text-align: center;
    font-size: 20px;
  }
  .log-list {
    overflow: hidden;
    .log-item {
      float: left;
      margin-right: 96px;
      width: 336px;
      height: 510px;
      background: $gray1;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      .log-img {
        display: block;
      }
      .item-info {
        padding: 40px;
        overflow: hidden;
        .time {
          margin-bottom: 15px;
          height: 14px;
          font-size: 13px;
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 13px;
            height: 14px;
            background: url("~images/bg-icon.png") -171px -17px no-repeat;
          }
        }
        .title {
          text-align: left;
          font-size: 18px;
        }
        .bock-line {
          display: block;
          margin: 25px 0 10px;
          width: 63px;
          height: 1px;
          overflow: hidden;
          background: #d8d8d9;
          font-style: normal;
          font-weight: normal;
        }
        .text {
          overflow:hidden;
          text-align: justify;
          text-overflow:ellipsis;
        }
      }
    }
  }
}
</style>
