<template>
  <!-- <meta name="referrer" content="no-referrer"> -->
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'Data Query & Trade Platform',
      // logo: 'https://images.weserv.nl/?url=https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.imedao.com%2Fimages%2Flogos%2Flogo_xueqiu_180%2Flogo_xueqiu_180-05.png&refer=http%3A%2F%2Fassets.imedao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629625532&t=d3da211e881cd3cefaad820d09bfd62b'
      logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.imedao.com%2Fimages%2Flogos%2Flogo_xueqiu_180%2Flogo_xueqiu_180-05.png&refer=http%3A%2F%2Fassets.imedao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629625532&t=d3da211e881cd3cefaad820d09bfd62b'
      // logo: 'el-icon-s-data'
      // logo: '@/pics/test.jpg'
      // logo: '/test.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 40;
      line-height: 50px;
      font-size: 11px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
