<template>
  <div class="homepage-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminHomepage from './admin'
import editorHomepage from './editor'
import buyerHomepage from './buyer'
import sellerHomepage from './seller'
import workerHomepage from './worker'

export default {
  name: 'Homepage',
  components: { adminHomepage, editorHomepage, buyerHomepage, sellerHomepage, workerHomepage },
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
    if (this.roles.includes('buyer')) {
      this.currentRole = "buyerHomepage"
    } else if (this.roles.includes('seller')) {
      this.currentRole = "sellerHomepage"
    } else if (this.roles.includes('buyer')) {
      this.currentRole = "workerHomepage"
    } else if (this.roles.includes('admin')) {
      this.currentRole = "adminHomepage"
    } 
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'buyerHomepage'
    // }
  }
}
</script>
