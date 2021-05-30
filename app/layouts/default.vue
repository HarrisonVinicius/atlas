<template>
  <div class="general">
    <nuxt
      class="content"
      :class="{
        mobile: $device.isMobile,
      }"
    ></nuxt>
  </div>
</template>

<style lang="sass" scoped>
.general
  overflow: hidden

  .content
    padding-top: 150px
    margin: 0 !important

    &.mobile
      padding-top: 90px

  .header
    width: 100%
    background-color: #fff
    position: fixed
    z-index: 1
</style>
