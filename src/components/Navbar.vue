<script setup lang="js">
import Switch from "@/components/Switch.vue";
</script>

<template>
  <nav class="navbar">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex flex-1 justify-center items-center md:items-stretch md:justify-start">
      </div>
    </div>
    <Switch/>
  </nav>

</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 1rem;
  background: transparent;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
}

</style>
