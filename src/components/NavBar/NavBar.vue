<script setup lang="js">
import Switch from "@/components/NavBar/Switch.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const navIcons = [
  {
    name: 'about',
    id: '#about',
    icon: ['fas','address-card']
  },
  {
    name: 'experiences',
    id: '#experiences',
    icon: ['fas','briefcase']
  },
  {
    name: 'projects',
    id: '#projects',
    icon: ['fas','diagram-project']
  },
]
</script>

<template>
  <nav class="navbar">
    <a
      v-for="(icon, index) in navIcons"
      :href="icon.id"
    >
      <font-awesome-icon class="icon" :icon="icon.icon" size="xl"/>
    </a>
    <Switch/>
  </nav>

</template>

<style scoped lang="scss">
.icon{
  color: var(--base-text)
}
@media only screen and (max-width: 768px){
  .navbar{
    z-index: 100000;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: fit-content;
    padding: 1em !important;
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--base-background);
    border-top: .2em solid var(--card-border);
  }
}
@media only screen and (min-width: 768px) {
  .icon{
    display: none;
  }
  .navbar {
    top: 0;
    right: 0;
    margin-top: 1rem;
    padding-right: 1.5rem;
    width: 100vw;
    background: transparent;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
