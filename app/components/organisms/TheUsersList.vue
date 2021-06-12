<template>
  <div class="the-users-list">
    <div class="the-users-list__header">
      <div class="the-users-list__header__title">
        <h1>Search Results</h1>
      </div>
      <div class="the-users-list__header__search">
        <BaseInput>
          <img
            class="the-users-list__header__search__icon"
            src="/icons/search-icon.png"
            alt="search"
          />
        </BaseInput>
      </div>
    </div>
    <div class="the-users-list__list">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="the-users-list__list__item"
        @click="goToUserPerfilHandler(item)"
      >
        <UserCard :user-name="item.login" :avatar="item.avatar_url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheUsersList',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions({
      setPerfilData: 'setPerfilData',
      getUserData: 'getUserData',
    }),

    async goToUserPerfilHandler(payload) {
      this.setPerfilData(payload)
      await this.getUserData(payload.login)
      this.$router.push({
        path: 'user-perfil',
        query: {
          userId: '00000000',
        },
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.the-users-list
  &__list
    margin-top: 40px
    display: grid

    @media (max-width: 480px)
      margin: 0

    @media (min-width: 600px)
      grid-template-columns: repeat(2, 1fr)

    @media (min-width: 900px)
      grid-template-columns: repeat(4, 1fr)

    @media (min-width: 1300px)
      grid-template-columns: repeat(5, 1fr)

    &__item
      height: 15rem
      width: 10rem

      @media (max-width: 480px)
        height: 8rem

  &__header
    display: flex
    border-bottom: 1px solid $mid-gray
    padding-bottom: 10px
    align-items: center

    @media (max-width: 600px)
      &__title
        display: none

      &__search
        width: 100% !important
        left: -10px

    &__title
      width: 65%
      font-weight: 500

    &__search
      width: 35%
      position: relative
      top: -10px

      &__icon
        height: 20px
        width: 20px
        position: relative
        top: 18px
        left: 25px
</style>
