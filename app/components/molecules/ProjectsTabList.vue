<template>
  <div class="projects-tab-list">
    <ProjectsTabListItem
      v-for="(item, index) in listData"
      :key="index"
      :title="item.name"
      :language="item.language"
      :description="item.description"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectsTabList',

  props: {
    listData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
