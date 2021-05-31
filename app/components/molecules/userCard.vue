<template>
  <div class="user-card">
    <BaseCard class="user-card__wrapper">
      <div class="user-card__wrapper__content">
        <BaseAvatar />
        <div class="user-card__wrapper__content__user-name">
          <span> teste12345... </span>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
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

            &__user-name
                margin-top: 10px

            @media (max-width: 480px)
              flex-direction: row
              justify-content: flex-start

              &__user-name
                margin-left: 20px
</style>
