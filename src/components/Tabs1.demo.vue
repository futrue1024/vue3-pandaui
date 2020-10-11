<demo>
常规用法
</demo>
<template>
  <div>
    <Tabs v-model:selected='x'>
      <Tab title="导航一">内容一
        <icon name="content"/>
        内容一
        <icon name="content"/>
      </Tab>
      <Tab title="导航二">内容二
        <icon name="tea"/>
        内容二
        <icon name="tea"/>
      </Tab>
    </Tabs>
  </div>
</template>

<script lang='ts'>
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import Icon from "../lib/Icon.vue";
import {ref} from "vue";

export default {
  components: {
    Tab,
    Tabs,
    Icon
  },
  setup() {
    const x = ref("导航一");
    return {x};
  }
};
</script>

