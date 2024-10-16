<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer class="drawer">
    <v-card
      class="drawer__profile"
    >
      <v-card-title>
        <span>Pedro Augusto Müller</span>
      </v-card-title>
      <v-img
        class="drawer__profile__image rounded-circle"
        aspect-ratio="3/4"
        src="@/assets/images/eu.jpeg"/>
    </v-card>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  &__profile {
    box-shadow: none;
    display: block;
    width: 100%;
    text-align: center;
    &__image{
      margin: auto;
      background-color: transparent !important;
      width: 150px !important;
    }
  }
}
</style>
