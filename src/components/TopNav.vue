<template>
  <div class="topNav">
    <div class="logo">
      <icon class="icon" name="screw"/>
      <h1 class="text"><span class="first">S</span>crew-ui</h1>
    </div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
    <span class="toggleMenu" @click="toggleMenu"> <icon name="menu"/></span>
  </div>
</template>

<script lang='ts'>
import {inject, Ref} from "vue";
import Icon from "./Icon.vue";

export default {
  name: "TopNav",
  components: {Icon},
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang='scss' scoped>
.topNav {

  display: flex;
  padding: 10px;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 10;


  > .logo {
    max-width: 18em;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > h1 {
      > .first {
        color: #41B884;
      }
    }

    > .icon {
      width: 30px;
      height: 30px;
      animation:screw 3s infinite linear;
    }
  }


  > .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleMenu {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

    > .icon {
      width: 22px;
      height: 22px;
      vertical-align: middle;

    }

  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleMenu {
      display: inline-block;
    }
  }
}
@keyframes screw {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(-360deg);
  }
}

</style>