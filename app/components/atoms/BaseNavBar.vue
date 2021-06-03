<template>
  <div class="nav-bar">
    <div class="nav-bar__icon" @click="returnHandler">
      <img
        src="/icons/arrow-left-icon.png"
        alt="arrow-left"
        height="25px"
        width="25px"
      />
    </div>
    <div class="nav-bar__title-mobile">
      <span> {{ title }} </span>
    </div>
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

  props: {
    title: {
      type: String,
      default: 'GitSearch',
    },
  },

  methods: {
    returnHandler() {
      this.$router.go(-1)
    },
  },
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
  position: fixed
  z-index: 1
  background-color: #fff

  @media (max-width: 480px)
    padding: 18px 5%

    &__logo
      display: none

    &__title
      display: none

  @media (min-width: 480px)
    &__icon
      display: none

    &__title-mobile
      display: none

  &__logo
    height: 60px
    width: 60px

  &__title
    font-size: 22px
    font-weight: 600
    margin-left: 10px

  &__title-mobile
    font-size: 20px
    font-weight: 500
    margin-left: 10px
</style>
