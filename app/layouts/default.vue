<template>
  <div class="general">
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
    margin: 0 !important
</style>
