<script setup lang="ts">
import Navbar from "@/components/TopBar.vue";
import Description from "@/components/Description.vue";
import Projects from "@/components/Projects.vue";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <TopBar/>
  <v-main
    class="content"
  >
    <Description/>
    <Projects/>
  </v-main>
</template>

<style scoped lang="scss">
.content {
  display: flex;
}
</style>
