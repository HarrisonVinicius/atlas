<template>
  <div class="user-card">
    <BaseCard class="user-card__wrapper">
      <div class="user-card__wrapper__content">
        <div class="user-card__wrapper__content__avatar">
          <BaseAvatar :img-path="avatar" />
        </div>
        <div class="user-card__wrapper__content__user-name">
          <span> {{ userName }} </span>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    userName: {
      type: String,
      default: 'user name',
    },

    avatar: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.user-card
    width: 100%
    height: 100%
    cursor: pointer

    &:hover
        opacity: 0.7

    &__wrapper
        padding: 10px

        @media (max-width: 480px)
          border-top: none
          border-left: none
          border-right: none
          padding: 0

        &__content
            width: 100%
            height: 100%
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column

            &__avatar
              height: 12vh
              width: 12vh
              border-radius: 55%

            &__user-name
                margin-top: 10px

            @media (max-width: 480px)
              flex-direction: row
              justify-content: flex-start

              &__avatar
                height: 10vh
                width: 10vh
                border-radius: 50%

              &__user-name
                margin-left: 20px
</style>
