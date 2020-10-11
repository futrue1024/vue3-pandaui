<template>
  <div>
    <div class="topNavAndBanner">
      <top-nav class="top"/>
      <div class="banner">
        <h1>ScrewUI</h1>
        <h2>一个基于Vue3的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/python-cx/vue3-pandaui">Github</a>
          <router-link to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>

    <div class="features">
      <ul>
        <li>
          <icon class="icon" name="vue3"/>
          <h3>基于 Vue 3</h3>
          <p>使用了最新 Vue 3 Composition API</p>
        </li>
        <li>
          <icon class="icon" name="dengpao"/>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <icon class="icon" name="typescript"/>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Icon from "../lib/Icon.vue";
import {inject, Ref} from "vue";

export default {
  name: "Home",
  components: {TopNav, Icon},
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");

    return {menuVisible};
  }
};
</script>

<style lang="scss" scoped>
//$green:#
.topNavAndBanner {
  background: linear-gradient(90deg, rgba(170, 251, 214, 1) 0%, rgba(65, 184, 132, 1) 95%, rgba(65, 184, 132, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  > .actions {
    padding: 8px 0;

    a {
      color: white;
      margin: 0 8px;
      display: inline-block;
      background: #354A5E;
      border-radius: 4px;
      padding: 6px 20px;
      text-decoration: none;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    margin-top: 120px;
    width: 1200px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > .icon {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

</style>