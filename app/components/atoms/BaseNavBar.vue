<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <Logo />
    </div>
    <div class="nav-bar__title">
      <span> GitSearch </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNavBar',
}
</script>

<style lang="sass" scoped>
.nav-bar
  width: 100%
  padding: 10px 20%
  -webkit-box-shadow: 0px 1px 13px 0px #6B6B6B
  box-shadow: 0px 1px 13px 0px #6B6B6B
  display: flex
  align-items: center

  &__logo
    height: 60px
    width: 60px

  &__title
    font-size: 22px
    font-weight: 600
    margin-left: 5px
</style>
