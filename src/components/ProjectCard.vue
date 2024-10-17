<script setup>
defineProps({
  title: {
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
const playSound = () => {
  let audio = new Audio('/audio/click1.mp3');
  audio.play();
}
</script>

<template>
  <v-card
    class="project"
  >
    <v-card-title
      class="project__title"
    >
      <h3>> {{ title }}</h3>
      <v-divider/>
    </v-card-title>
<!--    <v-img-->
<!--      class="project__img"-->
<!--      :src="image"-->
<!--      alt="Project Image"-->
<!--    />-->
    <v-card
      class="project__wrapper"
    >
      <v-card-text v-for="technologie in technologies" class="project__wrapper__technologies"

      >
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
  color: black;
  background-color: #e8e8e8;
  border: 4px solid #000;
  box-shadow: .4em .8em 0 #000;
  transition: transform 0.3s, box-shadow .3s ease-out;
  margin-right: 2em;
  margin-top: 2em;
  padding: 20px;

  &:hover {
    transform: translate(-0.525em, -0.525em);
    box-shadow: 2em 2em  0 #000;
  }

  &:active {
    transform: translate(0.0005em);
  }

  &__title {
    font-weight: bold;
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
      color: black;
      font-family: "DejaVu Sans Mono" !important;
      font-weight: 800;
      width: fit-content;
      text-align: center;
      padding: 0 !important;
      height: auto;
      border: dashed 1px #000;
    }

    &__description {
      color: #000;
      font-family: inherit;
      font-weight: bold;
    }

    &__dates {
      color: #000;
      font-family: inherit;
      font-weight: bold;
    }
  }
}
</style>
