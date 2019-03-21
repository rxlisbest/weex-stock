/*global Vue*/

/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');

import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('@/common/lang/zh.js'),   // 中文语言包
    'en-US': require('@/common/lang/en.js')    // 英文语言包
  }
})

import mixins from '@/mixins'
// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', i18n, router}, App));
router.push('/');

