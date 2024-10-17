<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    id: '1',
    title: 'elevencash',
    description: 'worked as a trainee full stack dev for imply on the cashless project. developing efficient solutions for the interface that producers used to manage their events',
    technologies: ['laravel octane', 'vuetify', 'postgresql'],
    initial_date: 'jul 2024'
  },
  {
    id: '1',
    title: 'taa',
    description: 'worked as a full stack dev for imply on the totem autoatendimento project.',
    technologies: ['vue', 'php'],
    initial_date: '2024-07-19'
  },
  {
    id: '1',
    title: 'Cashless',
    description: 'teste',
    technologies: ['Laravel Octane', 'Vue', 'PostgreSQL'],
    initial_date: '2024-07-19'
  },
];
</script>

<template>
  <Navbar/>
  <v-main
    class="content"
  >
    <v-container
      class="description-wrapper"
    >
      teste
    </v-container>
    <v-container
      class="project-wrapper"
    >
      <v-container
        class="project-wrapper__content"
      >
        <v-main
          class="project-wrapper__content__card"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :image="project.image"
            :description="project.description"
            :technologies="project.technologies"
            :initial_date="project.initial_date"
          />
        </v-main>
      </v-container>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">
.content {
  display: flex;
}

.description-wrapper {
  border: 1px dashed red;
  position: sticky;
  display: flex;
  width: 50%;
  top: 0;
  margin: 0 !important;
  height: 100vh;
  max-height: 100vh;
  background-color: #FFFDD0;
}

.project-wrapper {
  background-color: transparent;
  margin: 0 !important;
  width: 50%;
  display: flex;
  box-shadow: none;

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
