<template>
  <button class="screw-button" :class="classes" :disabled="disabled">
    <slot/>
  </button>
</template>

<script lang='ts'>
import {computed} from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal"
    },
    disable:{
      type:Boolean,
      default:false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`screw-theme-${theme}`]: theme,
        [`screw-size-${size}`]: size,
        [`screw-level-${level}`]: level
      };
    });
    return {classes};
  }
};
</script>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #4FC08D;
$radius: 4px;
$red: red;
$grey:grey;
.screw-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: $h;
  white-space: nowrap;
  background: white;
  padding: 0 12px;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:focus,
  &:hover {
    color: #4FC08D;
    border-color: #4FC08D;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.screw-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: #4FC08D;

    &:focus, &:hover {
      color: darken(#4FC08D, 10%);
    }
  }

  &.screw-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.screw-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.screw-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.screw-theme-button {
    &.screw-level-main {
      background: $green;
      color: white;
      border-color: $green;

      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }

    &.screw-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }


  &.screw-theme-link {
    &.screw-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.screw-theme-text {
    &.screw-level-main {
      color: $green;

      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }

    &.screw-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.screw-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.screw-theme-link, &.screw-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}


</style>