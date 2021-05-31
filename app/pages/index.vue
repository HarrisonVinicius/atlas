<template>
  <div class="general center">
    <div class="general__content center">
      <div class="general__content__logo">
        <Logo />
      </div>
      <div class="general__content__form">
        <SearchForm v-on="$listeners" v-bind="$attrs" @request="eventHandler" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',

  methods: {
    eventHandler(payload) {
      console.log(payload)
      this.$router.push('/users/users-list')
    },
  },
}
</script>

<style lang="sass" scoped>
.general
  overflow: hidden
  height: 100vh

  &__content
    margin: 0 !important
    height: 450px
    width: 450px
    flex-direction: column
    position: relative
    top: -40px

    &__logo
      height: 160px
      width: 160px
      margin-bottom: 10px

    @media (max-width: 480px)
      justify-content: flex-start !important
      padding: 0 20px

    &__form
      width: 100%
      height: 45px

.center
  display: flex
  justify-content: center
  align-items: center
</style>
