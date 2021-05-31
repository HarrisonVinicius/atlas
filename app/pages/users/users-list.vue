<template>
  <div class="users-list">
    <BaseNavBar title="Lista de Usuários" />
    <div class="users-list__container">
      <BaseCard class="users-list__container__card">
        <TheUsersList />
      </BaseCard>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.users-list
  &__container
    min-height: 91vh
    padding: 10% 20%

    @media (max-width: 480px)
      &__card
        padding: 0 !important
        border: none !important

    @media (max-width: 1250px)
      padding: 12% 10% !important

    @media (max-width: 900px)
      padding: 15% 5% !important

    @media (max-width: 500px)
      padding: 25% 5% !important
</style>
