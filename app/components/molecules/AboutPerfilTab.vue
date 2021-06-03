<template>
  <div class="about-perfil-tab">
    <div class="about-perfil-tab__title">
      <span>Bio</span>
    </div>
    <div class="about-perfil-tab__description">
      <span>{{ bio }}</span>
    </div>
    <div class="about-perfil-tab__links">
      <span> {{ location }} </span>
      <br />
      <span> {{ blog }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPerfilTab',

  data() {
    return {
      bio: '',
      location: '',
      blog: '',
    }
  },

  props: {
    aboutData: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    if (this.aboutData.bio) this.bio = this.aboutData.bio
    if (this.aboutData.location) this.location = this.aboutData.location
    if (this.aboutData.blog) this.blog = this.aboutData.blog
  },
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
