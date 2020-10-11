<template>
  <button class="screw-switch" @click="toggle" :class="{'screw-checked':value}">
    <span></span>
  </button>
</template>

<script lang='ts'>


export default {
  name: "Switch",
  props: {
   value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang='scss'>
$h: 22px;
$h2: $h - 4px;
.screw-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: $h2/2;
    background: white;
    transition: all .3s;
  }

  &.screw-checked {
    background: #4FC08D;
  }

  &.screw-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 8px;
    }
  }

  &.screw-checked:active {
    > span {
      width: $h2 + 8px;
      margin-left: -8px;
    }
  }
}


</style>