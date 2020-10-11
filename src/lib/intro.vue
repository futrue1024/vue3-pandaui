<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script lang='ts'>
import md from "../markdown/intro.md";

export default {
  data() {
    return {md};
  }
};
</script>

<style lang='scss' scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 16px;
  }
}
</style>