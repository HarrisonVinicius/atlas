<template>
  <div
    class="base-button base"
    :class="{
      success: success,
      base: !success,
    }"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    success: {
      type: Boolean,
      default: false,
    },

    base: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.base-button
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    padding: 25px 10px 25px 10px
    border-radius: 5px
    color: #fff
    font-size: 24px
    font-weight: 500
    cursor: pointer

    &:hover
        opacity: 0.7

.success
    background-color: $base-green !important

.base
    background-color: $base-blue
</style>
