<template>
  <div class="search-form">
    <div class="search-form__title">
      <h1>GitSearch</h1>
    </div>
    <div class="search-form__content">
      <BaseInput v-model="userName" placeholder="Pesquisar..." />
      <div v-if="showFeedback" class="search-form__content__error">
        <span> O campo é obrigatório </span>
      </div>
      <div class="search-form__content__buttons">
        <BaseButton
          class="search-form__content__buttons__button"
          base
          @click="clickHandler(0)"
        >
          Ver Todos
        </BaseButton>
        <BaseButton
          class="search-form__content__buttons__button"
          success
          @click="clickHandler(1)"
        >
          Buscar
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',

  data() {
    return {
      userName: null,
      showFeedback: false,
    }
  },

  watch: {
    userName: {
      handler() {
        this.userName ? (this.showFeedback = false) : (this.showFeedback = true)
      },
    },
  },

  methods: {
    clickHandler(payload) {
      const obj = {
        userName: this.userName,
        payload,
      }
      this.userName ? this.$emit('request', obj) : (this.showFeedback = true)
    },
  },
}
</script>

<style lang="sass" scoped>
.search-form
  &__title
    display: flex
    justify-content: center
    font-size: 32px
    font-weight: 400
    margin-bottom: 10px

  &__content
    &__error
      font-size: 18px
      font-weight: 500
      color: $base-red
      margin-top: 5px

    &__buttons
      display: flex
      justify-content: space-between
      margin-top: 25px
      height: 55px

      &__button
        width: 47% !important
</style>
