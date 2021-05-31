<template>
  <div class="general">
    <BaseNavBar />
    <nuxt class="content"></nuxt>
  </div>
</template>

<script>
export default {
  name: 'Inside',
}
</script>

<style lang="sass" scoped>
.general
  overflow: hidden
  background-color: $background-gray

  .content
    padding-top: 125px
    margin: 0 !important
</style>
