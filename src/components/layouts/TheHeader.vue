<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand site-logo">
          <img :src="logo.src" :alt="logo.title" />
          <span class="title">{{ logo.title }}</span>
        </router-link>
      </div>

      <div
        id="top-navbar-collapse"
        :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]"
      >
        <ul class="nav navbar-nav">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="{ active: index === activeNavIndex }"
          >
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
        <!-- 入口组件 -->
        <div class="navbar-right">
          <search-input/>
          <the-entry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheEntry from "@/components/layouts/TheEntry";
// 引入 SearchInput.vue 默认值
import SearchInput from '@/components/layouts/SearchInput'

export default {
  name: "TheHeader",
  components: {
    TheEntry,
    SearchInput
  },
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}`,
        title: "Vue.js",
      },
      navList: ["社区", "头条", "问答", "教程"],
      activeNavIndex: 0,
      showCollapsedNav: false,
    };
  },
  beforeCreate() {
    this.uploadsUrl =
      "https://cdn.learnku.com//uploads/communities/hIZjRRdF8oVYZy69XJnT.png";
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav;
    },
  },
};
</script>

<style scoped>
.site-logo {
  display: flex;
  color: #888888 !important;
}
.site-logo > span {
  margin-left: 10px;
}
.navbar-default .navbar-nav > .active > a {
  background: rgba(0, 0, 0, 0.03);
}
</style>