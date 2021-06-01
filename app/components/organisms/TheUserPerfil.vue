<template>
  <div class="the-user-perfil">
    <div class="the-user-perfil__header">
      <PerfilHeader />
    </div>
    <div class="the-user-perfil__tabs">
      <BaseTabs>
        <template #1> <AboutPerfilTab /> </template>
        <template #2> <PlansPerfilTab /> </template>
      </BaseTabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheUserPerfil',
}
</script>

<style lang="sass" scoped>
.the-user-perfil
  &__header
    width: 100%
    height: 230px

  &__tabs
    width: 100%
    min-height: 450px
</style>
