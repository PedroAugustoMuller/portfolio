<script setup>

import SkillsCards from "@/components/About/SkillsCards.vue";
</script>

<template>
  <v-container
    id="about"
    class="about"
  >
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur debitis dolore facilis minima nobis porro, qui quidem! Ad consequatur, eligendi explicabo illum maxime nostrum possimus rem ut voluptas voluptatibus.</p>
    <v-container>
      <SkillsCards/>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.about{
  padding: 4em !important;
  height: 100vh;
  color: var(--base-text);
}
</style>
