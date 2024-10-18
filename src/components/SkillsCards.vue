<script setup>
import {ref} from "vue";

const skills = [
  {
    title: 'html5',
    description: 'html',
    color: '#F06529',
    bgc: 'transparent'
  },
  {
    title: 'css3-alt',
    description: 'css',
    color: '#0F5298',
    bgc: 'transparent'
  },
  {
    title: 'js',
    color: '#F0DB4F',
    bgc: 'transparent'
  },
  {
    title: 'php',
    color: '#787CB5',
    bgc: 'transparent'
  },
  {
    title: 'laravel',
    color: '#F05340',
    bgc: 'transparent'
  },
  {
    title: 'vuejs',
    color: '#41B883',
    bgc: 'transparent'
  },
  {
    title: 'docker',
    color: '#1F97EE',
    bgc: 'transparent'
  },
  {
    title: 'linux',
    color: 'black',
    bgc: 'transparent'
  },
  {
    title: 'git',
    color: '#F04F30',
    bgc: 'transparent'
  },
  {
    title: 'github',
    color: '#000',
    bgc: 'transparent'
  },
  {
    title: 'bitbucket',
    color: 'blue',
    bgc: 'transparent'
  },
  {
    title: 'jira',
    color: 'blue',
    bgc: 'transparent',
  },
]
</script>

<template>
  <v-card class="skills-card">
    <v-card-title class="title">-> What i've used</v-card-title>
    <v-tooltip class="skill" v-for="(skill,index) in skills" :key="index" :open-on-hover="true" location="top">
      <template #activator="{ props }">
        <font-awesome-icon
          class="skill"
          v-bind="props"
          :icon="['fab', skill.title]"
          :style="skill.hovered ? {'color': skill.color,'background-color': skill.bgc, 'transition': '.3s'} : {'color': 'black','background-color': skill.bgc}"
          @mouseover="skill.hovered = true"
          @mouseleave="skill.hovered = false"
          size="3x"/>
      </template>
      <span style="color: black">{{ skill.description ?? skill.title }}</span>
    </v-tooltip>

  </v-card>
</template>

<style scoped lang="scss">
.skill{
  margin: .2em;
}
.skills-card{
  background-color: var(--card-background);
  border-radius: .5em;
  padding: 0 1em;
  box-shadow: .4em .8em 0 var(--card-border);
  border: 0.2em solid var(--card-border);
  transition: transform 0.3s, box-shadow .3s ease-out, background-color .3s ease-out;
  &:hover {
    transform: translate(-0.1em, -0.1em);
    box-shadow: 1em 1.1em  0 var(--card-border);
  }
}
.title{
  color: var(--card-text);
}
</style>
