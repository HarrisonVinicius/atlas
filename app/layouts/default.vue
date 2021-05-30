<template>
  <div class="general center">
    <div class="general__content center">
      <Logo />
      <div class="general__content__form">
        <SearchForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
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

    &__logo
      height: 160px
      width: 160px
      background-color: $base-yellow
      margin-bottom: 10px

    &__title
      font-weight: 600
      font-size: 28px

    &__form
      width: 100%
      height: 45px

.center
  display: flex
  justify-content: center
  align-items: center
</style>
