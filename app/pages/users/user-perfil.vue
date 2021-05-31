<template>
  <div class="user-perfil">
    <BaseNavBar title="Perfil" />
    <div class="user-perfil__container">
      <TheUserPerfil />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Perfil',

  layout: 'inside',
}
</script>

<style lang="sass" scoped>
.user-perfil
    &__container
      min-height: 91vh
      padding: 10% 18%

      @media (max-width: 480px)
        padding: 70px 0
</style>
