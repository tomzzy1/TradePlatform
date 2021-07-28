<template>
  <div class="homepage-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminHomepage from './admin'
import editorHomepage from './editor'

export default {
  name: 'Homepage',
  components: { adminHomepage, editorHomepage },
  data() {
    return {
      currentRole: 'adminHomepage'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorHomepage'
    }
  }
}
</script>
