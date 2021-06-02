<template>
  <div class="perfil-header">
    <div class="perfil-header__avatar">
      <div class="perfil-header__avatar__wrapper">
        <BaseAvatar :img-path="headerData.avatar_url" />
      </div>
    </div>
    <div class="perfil-header__name">
      <span class="perfil-header__name__person-name">
        {{ headerData.name }}
      </span>
      <br />
      <span class="perfil-header__name__user-name">
        @{{ headerData.login }}
      </span>
    </div>
    <div class="perfil-header__infos">
      <div class="perfil-header__infos__content">
        <div
          v-for="(item, index) in infos"
          :key="index"
          class="perfil-header__infos__content__item"
        >
          <span> {{ item.number }} </span>
          <br />
          <span> {{ item.label }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilHeader',

  data() {
    return {
      infos: [
        { label: 'Seguindo', number: '' },
        { label: 'Projetos', number: '' },
        { label: 'Seguidores', number: '' },
      ],
    }
  },

  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    this.infos[0].number = this.headerData.following
    this.infos[1].number = this.headerData.public_repos
    this.infos[2].number = this.headerData.followers
  },
}
</script>

<style lang="sass" scoped>
.perfil-header
  width: 100%
  height: 100%
  background-color: $base-yellow
  display: flex
  background-image: url("/images/background.png")
  background-size: cover
  background-position: center

  @media (max-width: 1280px)
    flex-direction: column

    &__avatar
      width: 100% !important

      &__wrapper
        top: 105px !important

    &__name
      width: 100% !important
      display: flex
      justify-content: center
      flex-direction: column
      align-items: center
      left: 0 !important
      top: 125px !important

      &__user-name
        position: relative
        top: -20px

    &__infos
      width: 100% !important
      padding: 0 25px

      &__content
        width: 100% !important
        top: 135px !important

  &__avatar
    width: 24%
    display: flex
    justify-content: center
    align-items: center

    &__wrapper
      position: relative
      top: 75px
      height: 170px
      width: 170px
      border-radius: 55%
      background-color: #fff
      display: flex
      justify-content: center
      align-items: center

  &__name
    width: 38%
    position: relative
    top: 145px
    left: 25px

    &__person-name
      font-size: 28px
      font-weight: 500

    &__user-name
      font-size: 18px
      font-weight: 400

  &__infos
    width: 38%

    &__content
      width: 90%
      display: flex
      justify-content: space-between
      position: relative
      top: 175px
      text-align: center
      color: $darker-blue
      font-weight: 600
      opacity: 0.8
</style>
