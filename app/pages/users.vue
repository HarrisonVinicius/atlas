<template>
  <div class="users">
    <div class="users__container">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
}
</script>

<style lang="sass" scoped>
.users
    min-height: 100vh
</style>
