<template>
  <canvas :style="'opacity: ' + props.intensity +';background-color: '+ props.color" ref="canvas"></canvas>
</template>

<script setup lang="js">

const props = defineProps({
  intensity: {
    type: Number,
    default: 0.2,
  },
  interval: {
    type: Number,
    default: 1000,
  },
  color: {
    type: String,
    default: 'black',
  }
})
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref(null);
const noise = ref(null);
const animationFrameId = ref(null);

const generateNoise = () => {
  noise.value = document.createElement('canvas');
  noise.value.width = window.innerWidth * 2;
  noise.value.height = window.innerHeight * 2;
  const noiseContext = noise.value.getContext('2d');

  const noiseData = noiseContext.createImageData(noise.value.width, noise.value.height);
  const buffer32 = new Uint32Array(noiseData.data.buffer);
  const len = buffer32.length;

  for (let i = 0; i < len; i++) {
    buffer32[i] = Math.random() < 0.5 ? 0 : -1;
  }

  noiseContext.putImageData(noiseData, 0, 0);
};

const moveNoise = () => {
  if (!canvas.value || !noise.value) return;

  const context = canvas.value.getContext('2d');
  const x = Math.random() * canvas.value.width;
  const y = Math.random() * canvas.value.height;

  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  context.drawImage(noise.value, -x, -y);

  setTimeout(function() {
    requestAnimationFrame(moveNoise)
  },props.interval);
};
const handleResize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    generateNoise();
  }
};

onMounted(() => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    generateNoise();
    moveNoise();
    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
canvas {
  height: 100%;
  left: 0;
  mix-blend-mode: soft-light;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
