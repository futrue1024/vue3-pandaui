<demo>
常规用法
</demo>
<template>
  <Dialog v-model:visible="x" :on-click-overlay="true"
          :ok="f1" :cancel="f2">
    <template v-slot:title>提示</template>
    <template v-slot:content>
      <div>hi</div>
      <div>hi</div>
    </template>
  </Dialog>
  <Button @click="toggle">toggle</Button>
</template>

<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
export default {
  components: {
    Dialog,
    Button
  },
  setup(){
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      console.log(1)
      return false
    }
    const f2 = () => {
      console.log(2)
    }
    return{toggle,f1,f2,x}
  }
};
</script>

