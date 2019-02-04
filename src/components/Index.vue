<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               :is-tab-view="false"
               ref="wxc-tab-bar"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><hello-world index="t"></hello-world></div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle"><hello-a index="hello-world"></hello-a></div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
  </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, Utils } from 'weex-ui'
import HelloWorld from './HelloWorld'
import HelloA from './HelloA'
import Config from '../config/bar.js'
console.log(Config)
export default {
  name: 'index',
  components: { WxcTabBar, HelloWorld, HelloA },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
  },
  mounted () {
    this.$refs['wxc-tab-bar'].setPage(2, null, false)
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      if (e.page === 1) {
      }
      console.log(e.page)
      // const index = e.page
      // console.log(index)
    }
  }
}
</script>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
