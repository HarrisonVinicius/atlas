<template>
  <div
    class="tab-button"
    :class="{
      active: active,
    }"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TabButon',

  props: {
    active: {
      type: Boolean,
      default: false,
    },

    buttonKey: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    clickHandler() {
      this.$emit('click', this.buttonKey)
    },
  },
}
</script>

<style lang="sass" scoped>
.tab-button
  background-color: $light-gray
  width: 100%
  height: 50px
  display: flex
  justify-content: center
  align-items: center
  font-size: 18px
  cursor: pointer
  border-bottom: 1px solid $mid-gray

  &:hover
    opacity: 0.7

.active
  border-right: 2px solid $base-blue
</style>
