<template>
    <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar :title="$t('messages.login.title')"
                   background-color="#0F8DE8"
                   text-color="#FFFFFF"
                   :left-button="false"
                   ></wxc-minibar>
    </div>
    <div class="login-logo">
      <image class="login-logo-image" :src="getImgPath('logo.png')"></image>
    </div>
    <div class="login-form">
      <wxc-cell :label="$t('messages.login.form.username')"
                :has-arrow="false"
                :has-top-border="true">
        <input slot="title" type="text" :value="form.username"></input>
      </wxc-cell>
      <wxc-cell :label="$t('messages.login.form.password')"
                :has-arrow="false"
                :has-top-border="true">
        <input slot="title" type="password" :value="form.password" ></input>
      </wxc-cell>
    </div>
    <div class="login-button">
      <wxc-button @wxcButtonClicked="submitForm" class="login-button-submit" type="blue" :text="$t('messages.button.login')"></wxc-button>
    </div>
  </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui'
import { WxcCell } from 'weex-ui'
import { WxcButton } from 'weex-ui'

export default {
  components: { 
    WxcCell,
    WxcMinibar,
    WxcButton,
  },
  created () {

  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    wxcCellClicked (e) {
      console.log(e)
    },
    submitForm () {
      console.log(2)
    }
  }
};
</script>
<style scoped>
  .login-logo {
    margin-top: 120px;
    margin-bottom: 80px;
    justify-content: center;
    flex-direction: row;
  }
  .login-logo-image {
    width: 500px;
    height: 180px;
    align-items: center;
  }
  .login-button {
    margin-top: 60px;
    justify-content: center;
    flex-direction: row;
  }
  .login-button-submit {
  }
</style>