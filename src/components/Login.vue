<template>
    <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar title="标题"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   :left-button="false"
                   ></wxc-minibar>
    </div>
    <div class="demo">
      <text class="demo-title">列表list展示</text>
      <wxc-cell label="标题"
                :has-arrow="false"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="true">
        <input ref = "inputMessage" class= "input" type="text" value="123"></input>
      </wxc-cell>
    </div>
  </div>
</template>

<script>
  import { WxcMinibar } from 'weex-ui';
  import { WxcCell } from 'weex-ui';
  export default {
    components: { 
      WxcCell,
      WxcMinibar
    },
    methods: {
      wxcCellClicked (e) {
        console.log(e)
      }
    }
  };
</script>