<template>
  <div class="topNav">
    <div class="logo">
      <router-link to="/">
        <icon class="icon" name="screw"/>
        <h1 class="text"><span class="first">S</span>crew-ui</h1>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">
          <icon name="document" class="icon"/>
          文档
        </router-link>
      </li>
    </ul>
    <span v-if="toggleMenuVisible" class="toggleMenu" @click="toggleMenu">
      <icon name="menu"/>
    </span>
  </div>
</template>

<script lang='ts'>
import {inject, Ref} from "vue";
import Icon from "../lib/Icon.vue";

export default {
  name: "TopNav",
  components: {Icon},
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false
    }
  },
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 18em;
    margin-right: auto;

    > a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-decoration: none
    ;
      > h1 {
        > .first {
          color: #41B884;
        }
      }
      > .icon {
        width: 30px;
        height: 30px;
        animation: screw 3s infinite linear;
      }
    }


  }


  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;

    > li {
      margin: 0 1em;

      > a {
        text-decoration: none;

        > .icon {
          width: 18px;
          height: 18px;
          margin-right: 6px;

        }
      }
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
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

</style>