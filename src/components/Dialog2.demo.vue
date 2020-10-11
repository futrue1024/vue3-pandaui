<demo>
一键打开 Dialog
</demo>
<template>
  <div>
  <Dialog></Dialog>
  <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";
import {h} from "vue";
export default {
  components: {
    Dialog,
    Button
  },
  setup(){
    const showDialog = () => {
      openDialog({
        title: h('strong',{},'标题'),
        content: '你好',
        ok() {
          return false
          //执行函数，如果返回false，弹框不可关闭。
        },
        cancel() {
          console.log('cancel')
          //执行函数，如果返回false，弹框不可关闭。
        }
      })
    }
    return{showDialog}
  }
};
</script>

