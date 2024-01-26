<template>
  <div
    class="p-1 rounded text-xs font-semibold w-fit h-6 flex justify-center items-center uppercase"
    :class="color"
    v-text="text"
  />
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  color: string;
}>();
</script>
