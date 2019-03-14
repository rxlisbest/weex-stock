<template>
    <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar :title="$t('messages.login.username')"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   :left-button="false"
                   ></wxc-minibar>
    </div>
    <div class="demo">
      <wxc-cell :label="$t('messages.login.username')"
                :has-arrow="false"
                :has-top-border="true">
        <input slot="title" type="text" value="123"></input>
      </wxc-cell>
      <wxc-button type="blue" text="确定"></wxc-button>
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
    methods: {
      wxcCellClicked (e) {
        console.log(e)
      }
    }
  };
</script>