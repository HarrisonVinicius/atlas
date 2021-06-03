<template>
  <div class="projects-tab-list-item">
    <div class="projects-tab-list-item__title">
      <span> {{ title }} </span>
    </div>
    <div class="projects-tab-list-item__content">
      <div class="projects-tab-list-item__content__description">
        <span>
          {{ itemDescription }}
        </span>
      </div>
      <div class="projects-tab-list-item__content__infos">
        <div
          v-if="language"
          class="projects-tab-list-item__content__infos__language"
        >
          <div
            v-if="language"
            class="projects-tab-list-item__content__infos__language__circle"
          />
          <span> {{ itemLanguage }} </span>
        </div>
        <div class="projects-tab-list-item__content__infos__date">
          <span> Atualizado em 18/11/11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsTabListItem',

  data() {
    return {
      itemDescription: '',
      itemLanguage: '',
    }
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    language: {
      type: String,
      default: '',
    },
  },

  mounted() {
    if (this.description) this.itemDescription = this.description
    if (this.language) this.itemLanguage = this.language
  },
}
</script>

<style lang="sass" scoped>
.projects-tab-list-item
  border-bottom: 1px solid $mid-gray
  padding: 20px 0

  &__title
    font-size: 22px
    font-weight: 500
    color: $base-blue

  &__content
    display: flex

    @media (max-width: 1280px)
      flex-direction: column

      &__description
        width: 100% !important

      &__infos
        width: 100% !important

    &__description
      width: 75%
      font-size: 20px
      font-weight: 500
      opacity: 0.7

    &__infos
      width: 25%
      font-size: 12px
      font-weight: 500
      opacity: 0.7

      @media (max-width: 1280px)
        display: flex
        justify-content: space-between
        margin-top: 10px

      &__language
        display: flex

        &__circle
          height: 20px
          width: 20px
          background-color: red
          margin-right: 10px
          border-radius: 50%

.red
  background-color: red !important

.blue
  background-color: blue !important

.green
  background-color: green !important

.yellow
  background-color: yellow !important
</style>
