<template>
  <div>
    <Demo :component="Icon1Demo"/>
  </div>

</template>

<script lang='ts'>
import Icon from "../lib/Icon.vue";
import Demo from "./Demo.vue";
import Icon1Demo from "./Icon1.demo.vue";

export default {
  components: {
    Icon, Demo
  },
  setup() {
    return {Icon1Demo};
  }
};
</script>

