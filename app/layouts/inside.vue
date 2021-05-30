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

  .content
    padding-top: 150px
    margin: 0 !important
</style>
