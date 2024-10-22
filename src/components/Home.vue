<script setup lang="ts">
import Navbar from "@/components/NavBar/NavBar.vue";
import Description from "@/components/Description.vue";
import Experiences from "@/components/Experience/Experiences.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
</script>

<template>
  <NavBar/>
  <v-main
    class="content"
  >
    <Description/>
    <Experiences/>
  </v-main>
</template>

<style scoped lang="scss">
.content {
  background-color: transparent;
}
@media only screen and (max-width: 768px) {
  .content{
    display: block;
  }
}
@media only screen and (min-width: 768px){
  .content{
    display: flex;
  }
}
</style>
