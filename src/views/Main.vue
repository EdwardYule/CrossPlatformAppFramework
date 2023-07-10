<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/layouts/Menu.vue'
import Header from '@/components/layouts/Header.vue'
</script>

<template>
  <div class="main">
    <Menu></Menu>
    <main>
      <Header></Header>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped lang="stylus">
.main {
  display: flex;
  justify-content: space-between
  .content {
    padding: 20px;
  }
}
</style>
