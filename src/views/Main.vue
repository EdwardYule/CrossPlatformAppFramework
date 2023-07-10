<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/layouts/Menu.vue'
import Header from '@/components/layouts/Header.vue'
</script>

<template>
  <div class="main">
    <Menu></Menu>

    <main class="content">
      <Header></Header>
      <div>
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped lang="stylus">
.main {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  .content {
    width: 100%;
    flex: 1;
  }
}
</style>
