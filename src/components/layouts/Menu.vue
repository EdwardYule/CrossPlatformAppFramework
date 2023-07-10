<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router/index.js";
const router = useRouter();
import MenuIcon from "@/components/icons/MenuIcon.vue";

let width = ref("180px");
let deviceType = ref("pc");
const to = (route) => {
  console.log(route);
  router.push(route);
};
const resize = () => {
  const clientWidth = document.body.clientWidth;
  if (clientWidth <= 390) {
    deviceType.value = "phone";
  } else if (clientWidth <= 768) {
    deviceType.value = "pad";
  } else {
    deviceType.value = "pc";
  }
};
window.addEventListener("resize", resize);
resize();

watch(
  () => deviceType.value,
  (newVal) => {
    if (newVal === "phone") {
      width.value = "40px";
    } else if (newVal === "pad") {
      width.value = "180px";
    } else {
      width.value = "180px";
    }
  }
);
</script>

<template>
  <div
    class="menu"
    :style="{
      minWidth: width,
    }"
  >
    <div v-for="route in routes" :key="route.path">
      <div @click="to(route)" class="item">
        <MenuIcon />
        <span v-if="deviceType != 'phone'">{{ route.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.menu {
  background-color: black;
  color: white;

  .item {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
