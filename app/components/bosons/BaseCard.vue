<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
}
</script>

<style lang="sass" scoped>
.base-card
    background-color: #fff
    height: 100%
    width: 100%
    border-radius: 5px
    border: 1px solid $mid-gray
    padding: 40px
</style>
