<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
  </div>
</template>

<script lang='ts'>
export default {
  name: "TopNav"
}
</script>

<style lang='scss' scoped>
.topNav {
  background-color: pink;
  display: flex;
  padding: 16px;
  > .logo{
    max-width: 6em;
    margin-right: auto;
  }
  > .menu{
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    > li{
      margin: 0 1em;
    }
  }
}
</style>