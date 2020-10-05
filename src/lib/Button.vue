<template>
  <button class="screw-button">
    <slot/>
  </button>
</template>

<script lang='ts'>
export default {
  name: "Button"
};
</script>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #4FC08D;
$radius: 4px;
.screw-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
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



  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>