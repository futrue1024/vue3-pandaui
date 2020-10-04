<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>熊猫UI</h1>
      <h2>一个基于Vue3的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/python-cx/vue3-pandaui">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";


export default {
  name: "Home",
  components: {TopNav},

};
</script>

<style lang="scss" scoped>
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #41B884;
  > .actions{
    padding: 8px 0;
    a{
      margin: 0 8px;
      display: inline-block;
      background: #fff;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>