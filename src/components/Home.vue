<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单一</li>
        <li>菜单二</li>
      </ul>
    </div>
    <div class="banner">
      <h1>熊猫UI</h1>
      <h2>一个基于Vue3的UI框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav1'
}
</script>

<style lang="scss" scoped>
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