<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>螺丝钉UI</h1>
      <h2>一个基于Vue3的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/python-cx/vue3-pandaui">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <icon class="icon" name="vue3"/>
    <icon class="icon" name="dengpao"/>
    <icon class="icon" name="typescript"/>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Icon from "../components/Icon.vue";

export default {
  name: "Home",
  components: {TopNav,Icon},

};
</script>

<style lang="scss" scoped>
//$green:#
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  clip-path:ellipse(80% 60% at 50% 40%) ;
  background: linear-gradient(90deg, rgba(170,251,214,1) 0%, rgba(65,184,132,1) 95%, rgba(65,184,132,1) 100%);
  > .actions{
    padding: 8px 0;
    a{
      color: white;
      margin: 0 8px;
      display: inline-block;
      background: #354A5E;
      border-radius: 4px;
      padding: 6px 20px;
    }
  }
}
.icon{
  width: 40px;
  height: 40px;
}
</style>