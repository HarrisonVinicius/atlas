<template>
  <div class="perfil-header">
    <div class="perfil-header__avatar">
      <div class="perfil-header__avatar__wrapper">
        <BaseAvatar />
      </div>
    </div>
    <div class="perfil-header__name">
      <span> name </span>
    </div>
    <div class="perfil-header__infos">
      <span> infos </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilHeader',
}
</script>

<style lang="sass" scoped>
.perfil-header
  width: 100%
  height: 100%
  background-color: $base-yellow
  display: flex

  &__avatar
    width: 24%
    display: flex
    justify-content: center
    align-items: center

  &__name
    width: 38%

  &__infos
    width: 38%
</style>
