<script setup lang="ts">
import Home from '../../portfolio/src/components/Home.vue'
</script>

<template>
  <v-app class="app">
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>
<style scoped lang="scss">
.app{
  background-color: var(--base-background);
  transition: background-color .3s ease-in-out;
}
</style>
