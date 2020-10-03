<template>
  <div>
    <top-nav/>
    <div class="content">
      <aside>
        <h2>侧边列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch"></router-link>
          </li>
          <li>
            <router-link to="/doc/button"></router-link>
          </li>
          <li>
            <router-link to="/doc/dialog"></router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"></router-link>
          </li>
        </ol>
      </aside>
      <main>主要内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  name: "Doc",
  components: {TopNav}
};
</script>

<style scoped>

</style>