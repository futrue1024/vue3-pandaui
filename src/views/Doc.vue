<template>
  <div class="layout">
    <top-nav class="nav" toggle-menu-visible/>
    <div class="content">
      <transition name="slide">
        <aside v-if="menuVisible">
          <h2>入门</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始</router-link>
            </li>
          </ol>
          <h2>组件</h2>
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
      </transition>
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
    console.log(menuVisible.value);
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
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  > .content {
    flex-grow: 1;
    padding-top: 80px;
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
      border-right: 1px solid #eaecef;
    }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
    @media (min-width: 800px) {
      margin-left: 60px;
    }
  }
}

aside {
  font-size: 16px;
  background: lightblue;
  width: 160px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 70px;
  height: 100%;
  z-index: 10;
  @media (max-width: 500px) {
    width: 150px;

  }

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-weight: 700;
  }

  > ol {
    top: 300px;

    > li {

      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        border-left: 4px solid transparent;

      }

      .router-link-active {
        border-left: 4px solid #4FC08D;
        color: #4FC08D;
      }
    }
  }
}
.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>