<template>
  <div class="layout">
    <top-nav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>侧边列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {inject, Ref} from "vue";

export default {
  name: "Doc",
  components: {TopNav},
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");

    return {menuVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  flex-direction: column;

  > .nav {
    flex-shrink: 0;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
  }

  > .content {
    flex-grow: 1;
    padding-top: 70px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
    overflow: auto;
  }
}

aside {
  background: lightblue;
  width: 160px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 70px;
  height: 100%;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    top: 300px;

    > li {
      padding: 4px 0;
    }
  }
}
</style>