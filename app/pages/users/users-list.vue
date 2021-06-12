<template>
  <div class="users-list">
    <BaseNavBar title="Lista de Usuários" />
    <div class="users-list__container">
      <BaseCard class="users-list__container__card">
        <TheUsersList :items="listItems" />
      </BaseCard>
    </div>
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UsersList',

  data() {
    return {
      listItems: [],
      page: 2,
    }
  },

  computed: {
    ...mapState(['usersList', 'userNameSearched']),
  },

  mounted() {
    this.listItems.push(...this.usersList)
  },

  methods: {
    async infiniteHandler($state) {
      try {
        const res = await this.$api.$get(
          '/search/users?q=' +
            this.userNameSearched +
            '+in:user&page=' +
            this.page +
            '&per_page=20'
        )
        if (res.items.length) {
          this.page += 1
          this.listItems.push(...res.items)
          console.log(this.listItems)
          $state.loaded()
        } else {
          $state.complete
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
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
