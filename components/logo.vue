<template>
  <a href="https://team-reflex.com">
    <img
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :src="src"
      alt="Reflex"
      class="h-48 w-48 animate-hue"
    />
  </a>
</template>

<script setup lang="ts">
const hover = ref(false);
const src = computed(() => (hover.value ? "/logo-glow.png" : "/logo.png"));
</script>
