<script setup>
import {ref, useTemplateRef} from "vue";
const card = ref(null);

defineProps({
  title: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  initial_date: {
    type: String,
    required: true,
  },
  final_date: {
    type: String,
    required: false,
  }
})

const rotateCard = (event) =>{
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = x - middleX;
  const offsetY = y - middleY;
  if(card.value){
    card.value.style.transform = "--rotateX("+offsetX+"deg)";
    card.value.style.transform = "--rotateY("+offsetY+"deg)";
  }

}

</script>

<template>
  <v-card class="project" :ref="card" @mousemove="rotateCard($event)">
    <v-card-title class="project__title">
      <h3>> {{ title }}</h3>
    </v-card-title>
    <p style="color: var(--card-text)">at: {{project}} </p>
    <v-divider/>
    <v-card class="project__wrapper">
      <v-card-text v-for="technologie in technologies" class="project__wrapper__technologies">
        {{ technologie }}
      </v-card-text>
    </v-card>
    <v-card class="project__wrapper">
      <v-card-text class="project__wrapper__description">
        {{ description }}
      </v-card-text>
    </v-card>
    <v-card class="project__wrapper">
      <v-card-text class="project__wrapper__dates">
        {{ initial_date }} - {{ final_date ?? 'present' }}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style scoped lang="scss">
.project * {
  margin: 8px 0;
}

.project {
  width: 400px;
  height: fit-content;
  border-radius: 0 50px;
  color: var(--card-text);;
  background-color: var(--card-background);
  border: 4px solid var(--card-border);
  box-shadow: .4em .8em 0 var(--card-border);
  transition: transform 0.3s, box-shadow .3s ease-out, background-color .3s ease-out;
  margin-right: 2em;
  margin-top: 4em;
  padding: 1.3em;

  &:hover {
    transform: translate(-0.525em, -0.525em);
    box-shadow: 2em 2em  0 var(--card-border);
  }

  &:active {
    transform: translate(0.0005em);
  }

  &__title {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0 !important;
  }

  &__img {
    margin: 0 auto;
  }

  &__wrapper {
    background-color: transparent;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__technologies {
      color: var(--card-text);
      font-weight: 800;
      width: fit-content;
      text-align: center;
      padding: 0 !important;
      height: auto;
      border: dashed 1px var(--technologies-border);
    }

    &__description {
      color: var(--card-text);;
      font-weight: bold;
    }

    &__dates {
      color: var(--card-text);;
      font-weight: bold;
    }
  }
}
</style>
