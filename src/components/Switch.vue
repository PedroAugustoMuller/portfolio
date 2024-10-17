<script setup>
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)
const playSound = () => {
  let audio = new Audio('/audio/click1.mp3');
  audio.play();
}
</script>

<template>
  {{isDark}}
  <label class="switch" @click="playSound()">
    <input type="checkbox">
    <span class="slider" @click="toggleDark()"/>
  </label>
</template>

<style scoped lang="scss">
.switch {
  width: 2rem;
  height: 1rem;
  color: #fff;
  font-size: 17px;
  position: relative;
  display: inline-block;
  margin-right: 1.5rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  border: 2px solid #000;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  transition: .15s;
  border-radius: 1em;
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  border: 2px solid #000;
  border-radius: 100%;
  left: -2px;
  bottom: -2px;
  background-color: white;
  transform: translateY(-0.2em);
  box-shadow: 0 0.2em 0 #000,
  0.2em 0.4em 0 #000;
  transition: .2s;
}

input:checked + .slider {
  background-color: #000;
}

input:focus-visible + .slider {
  box-shadow: 0 0 0 2px #000;
}

input:checked + .slider:before {
  transform: translateX(calc(2em - 1em)) translateY(-0.2em);
}
</style>
