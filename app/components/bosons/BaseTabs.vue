<template>
  <div class="base-tabs">
    <div class="base-tabs__buttons-column">
      <div class="base-tabs__buttons-column__buttons">
        <TabButton
          v-for="(button, index) in buttons"
          :key="index"
          :button-key="index"
          :active="button.selected"
          @click="clickHandler"
        >
          {{ button.label }}
        </TabButton>
      </div>
    </div>
    <div class="base-tabs__tabs-column">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="base-tabs__tabs-column__tab"
      >
        <div
          v-if="tab.tabKey === tabVisibilityControl"
          class="base-tabs__tabs-column__tab__content"
        >
          <slot :name="tab.tabName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',

  data() {
    return {
      buttons: [
        { label: 'Sobre', selected: true },
        { label: 'Projetos', selected: false },
      ],
      tabs: [],
      tabVisibilityControl: 0,
      tabName: 'tab',
    }
  },

  mounted() {
    this.buttons.forEach((element, index) => {
      this.createTabHandler(index)
    })
  },

  methods: {
    clickHandler(payload) {
      this.tabVisibilityControl = payload
      this.buttons.forEach((element, index) => {
        index === payload
          ? (this.buttons[index].selected = true)
          : (this.buttons[index].selected = false)
      })
    },

    createTabHandler(payload) {
      const obj = {
        tabKey: payload,
        tabName: (payload + 1).toString(),
      }
      this.tabs.push(obj)
    },
  },
}
</script>

<style lang="sass" scoped>
.base-tabs
    width: 100%
    min-height: 450px
    display: flex

    @media (max-width: 1280px)
      flex-direction: column !important
      position: relative
      top: 235px

      &__buttons-column
        width: 100% !important
        border-right: none !important
        border-bottom: 1px solid $darken-gray
        min-height: 50px !important
        padding-top: 0 !important

        &__buttons
          display: flex

      &__tabs-column
        width: 100% !important

    &__buttons-column
        width: 25%
        min-height: 450px
        border-right: 1px solid $darken-gray
        padding-top: 90px

    &__tabs-column
        min-height: 450px
        width: 75%

        &__tab
          &__content
            padding: 60px
</style>
