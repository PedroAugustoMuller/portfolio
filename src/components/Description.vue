<script setup>

import SkillsCards from "@/components/SkillsCards.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <v-container
    class="description-wrapper"
  >
    <v-container class="description">
      <v-container class="container-plane">
        <h1>Pedro Augusto Müller</h1>
      </v-container>
      <h3>Fullstack Developer</h3>
      <v-divider/>
      <v-container class="description__anchors">
        <a href="#about" class="description__anchors__text">
          <span>~ </span>
          <span>about</span>
        </a>
        <a href="#experience" class="description__anchors__text">
          <span>~ </span>
          <span>experiences</span>
        </a>
        <a href="#projects" class="description__anchors__text">
          <span>~ </span>
          <span>projects</span>
        </a>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.description-wrapper {
  border-right: 4px solid var(--card-border);
  position: sticky;
  display: flex;
  width: 50%;
  top: 0;
  margin: 0 !important;
  height: 100vh;
  max-height: 100vh;
  background-color: transparent;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--base-text);
  &__anchors{
    display: flex;
    flex-direction: column;
    justify-content: left;
    &__text{
      color: var(--base-text);
      text-decoration: none;
      font-size: 1.2rem;
      font-family: inherit;
      font-weight: bold;
    }
  }
}
</style>
