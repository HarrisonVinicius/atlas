<template>
  <div class="projects-perfil-tab">
    <ProjectsTabList :list-data="userRepos" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProjectsPerfilTab',

  computed: {
    ...mapState(['perfilData', 'userRepos']),
  },

  async mounted() {
    await this.getUserRepos(this.perfilData.login)
  },

  methods: {
    ...mapActions({
      getUserRepos: 'getUserRepos',
    }),
  },
}
</script>
