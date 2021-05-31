<template>
  <div class="index">
    <BaseCard class="index__card">
      <TheUsersList />
    </BaseCard>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.index
  min-height: 91vh
  padding: 19.5%

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
