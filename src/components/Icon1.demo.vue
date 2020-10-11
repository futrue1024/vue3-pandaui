<demo>
常规用法
</demo>
<template>
  <Icon class="icon" name="arrow-down"/>
  <Icon name="arrow-right"/>
  <Icon name="bell"/>
  <Icon name="circle-slash"/>
  <Icon name="clock"/>
  <Icon name="ellipsis"/>
</template>

<script lang='ts'>
import Icon from "../lib/Icon.vue";

export default {
  components: {
    Icon
  },
};
</script>
<style lang="scss" scoped>
.icon{
  width: 32px;
  height: 32px;
}
</style>

