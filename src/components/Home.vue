<script setup lang="ts">
import Drawer from "@/components/Drawer.vue";
import Navbar from "@/components/Navbar.vue";
import Filter from "@/components/Filter.vue";
</script>

<template>
  <Navbar></Navbar>
  <Filter
    :intensity="0.2"
    :interval="100"
  />
  <v-card
    class="v-card bg-amber"
  >
  </v-card>

</template>

<style scoped lang="scss">

</style>
