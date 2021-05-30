<template>
  <div class="search-form">
    <div class="search-form__title">
      <h1>GitSearch</h1>
    </div>
    <div class="search-form__content">
      <BaseInput placeholder="Pesquisar..." />
      <div class="search-form__content__buttons">
        <BaseButton class="search-form__content__buttons__button" base>
          Ver Todos
        </BaseButton>
        <BaseButton class="search-form__content__buttons__button" success>
          Buscar
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
}
</script>

<style lang="sass" scoped>
.search-form
    &__title
        display: flex
        justify-content: center
        font-size: 32px
        font-weight: 400

    &__content
        &__buttons
            display: flex
            justify-content: space-between
            margin-top: 25px
            height: 55px

            &__button
                width: 47% !important
</style>
