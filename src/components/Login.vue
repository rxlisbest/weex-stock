<template>
    <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar :title="$t('messages.login.title')"
                   background-color="#0F8DE8"
                   text-color="#FFFFFF"
                   :left-button="false"
                   ></wxc-minibar>
    </div>
    <div>
      <image class="login-logo" src="file:///android_asset/images/rxl.png"></image>
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
        <input slot="title" type="text" :value="form.password" ></input>
      </wxc-cell>
    </div>
    <div class="login-button">
      <wxc-button @wxcButtonClicked="submitForm" class="login-button-submit" type="blue" :text="$t('messages.button.submit')"></wxc-button>
    </div>
  </div>
</template>

<script>
  import { WxcMinibar } from 'weex-ui';
  import { WxcCell } from 'weex-ui';
  import { WxcButton } from 'weex-ui';

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
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 100px;
    height: 50px;
  }
  .login-button {
    text-align: center;
    margin-top: 0.8rem;
  }
  .login-button-submit {
    margin: 0 auto;
  }
</style>