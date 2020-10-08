<template>
  <div class="screw-tabs">
    <div class="screw-tabs-nav" ref="container">
      <div class="screw-tabs-nav-items" :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)" v-for="(t,index) in titles"
           :key="index" :class="{selected:t===selected}"
      >{{ t }}
      </div>
      <div class="screw-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="screw-tabs-content">
      <component class="screw-tabs-content-items" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang='ts'>

import Tab from "./Tab.vue";
import {computed, ref, onMounted, onUpdated, watchEffect} from "vue";

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const watch = () => {
      return watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      });
    };
    onMounted(() => {
      watch();
    });
    onUpdated(() => {
      watch();
    });

    const defaults = context.slots.default();
    //default为函数
    defaults.forEach(tag => {
      if (tag.type !== Tab)
        throw new Error("Tabs 子标签必须是Tab");
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const titles = defaults.map(tab => {
      return tab.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
      console.log("title被更新了" + title);
    };
    return {defaults, titles, current, select, selectedItem, indicator, container};
  }
};
</script>

<style lang='scss'>
$green: #4FC08D;
$color: #333;
$border-color: #d9d9d9;
.screw-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-items {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $green;
      }
    }

    &-indicator {
      position: absolute;
      background: $green;
      height: 3px;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all .4s;
    }
  }

  &-content {
    padding: 8px 0;
  }
}

</style>