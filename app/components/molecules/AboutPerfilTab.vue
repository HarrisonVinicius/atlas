<template>
  <div class="about-perfil-tab">
    <div class="about-perfil-tab__title">
      <span>Bio</span>
    </div>
    <div class="about-perfil-tab__description">
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos
        pariatur distinctio, totam maxime dolorum modi necessitatibus architecto
        similique culpa assumenda blanditiis et, nam facilis sapiente provident
        laborum earum mollitia.</span
      >
    </div>
    <div class="about-perfil-tab__links">
      <span> São Francisco </span>
      <br />
      <span> www.asdasd.com</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPerfilTab',
}
</script>

<style lang="sass" scoped>
.about-perfil-tab
  &__title
    font-size: 22px
    color: $base-blue
    font-weight: 500

  &__description
    font-size: 20px
    margin-top: 10px

  &__links
    margin-top: 50px
    color: $base-blue
    font-weight: 500
    font-size: 20px
</style>
