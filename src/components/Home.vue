<script setup lang="ts">
import Navbar from "@/components/TopBar.vue";
import Description from "@/components/Description.vue";
import Experiences from "@/components/Experiences.vue";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <TopBar/>
  <v-main
    class="content"
  >
    <Description/>
    <Experiences/>
  </v-main>
</template>

<style scoped lang="scss">
.content {
  display: flex;
}
</style>
