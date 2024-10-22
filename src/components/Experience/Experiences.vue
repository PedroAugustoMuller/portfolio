<script setup>
import ExperienceCard from "@/components/Experience/ExperienceCard.vue";
import SkillsCards from "@/components/About/SkillsCards.vue";
const projects = [
  {
    title: 'Fullstack Dev',
    project: 'elevencash',
    description: 'worked for imply on cashless and totem autoatendimento. creating efficient solutions for the interface that producers use to manage their events, and self-service kiosks.',
    technologies: ['laravel octane', 'vuetify', 'postgresql'],
    initial_date: 'jul 2024'
  },
  {
    title: 'Backend Intern',
    project: 'programa de novos talentos imply',
    description: "interned at imply, in the 'programa de novos talentos' (new talents program), during which I created and consumed apis, managed databases and constructed websites",
    technologies: ['php', 'mysql', 'docker','git','html','css','linux'],
    initial_date: 'may 2024',
    final_date: 'jul 2024'
  },
];
</script>

<template>
  <v-container
    class="project-wrapper"
  >
    <v-container
      id="about"
      class="about"
    >
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur debitis dolore facilis minima nobis porro, qui quidem! Ad consequatur, eligendi explicabo illum maxime nostrum possimus rem ut voluptas voluptatibus.</p>
      <v-container>
        <SkillsCards/>
      </v-container>
    </v-container>
    <v-container
      id="experience"
      class="project-wrapper__content"
    >
      <v-main
        class="project-wrapper__content__card"
      >
        <ExperienceCard
          v-for="(project,index) in projects"
          :key="index"
          :title="project.title"
          :project="project.project"
          :description="project.description"
          :technologies="project.technologies"
          :initial_date="project.initial_date"
          :final_date="project.final_date"
        />
      </v-main>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.about{
  padding: 4em !important;
  height: 100vh;
  color: var(--base-text);
}
.project-wrapper {
  background-color: transparent;
  height: fit-content;
  margin: 0 !important;
  padding: 0 !important;
  width: 50%;
  display: flex;
  box-shadow: none;
  flex-direction: column;
  &__content{
    margin: 0 auto;
    width: 400px !important;
    display: flex;
    &__card{
      margin: 0 auto !important;
      padding: 0 !important;
    }
  }
}
</style>
