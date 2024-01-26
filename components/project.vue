<template>
  <a
    :href="link"
    target="_blank"
    class="flex flex-col gap-2 hover:scale-105 transition text-white"
  >
    <div class="flex flex-row gap-2 justify-between">
      <div class="flex flex-row gap-2 items-center">
        <Badge :text="mapping[type].text" :color="mapping[type].color" />
        <h3 class="font-bold text-lg">{{ name }}</h3>
      </div>

      <Link :size="24" />
    </div>
    <p>{{ description }}</p>
  </a>
</template>

<script setup lang="ts">
import { Link } from "lucide-vue-next";

export type ProjectItem = {
  name: string;
  description: string;
  link: string;
  type: "php" | "ts" | "vue" | "nuxt" | "react" | "next" | "svelte";
};

defineProps<ProjectItem>();

const mapping = {
  php: {
    color: "bg-red-500",
    text: "PHP",
  },
  ts: {
    color: "bg-blue-500",
    text: "TS",
  },
  vue: {
    color: "bg-green-500",
    text: "Vue",
  },
  nuxt: {
    color: "bg-green-500",
    text: "Nuxt",
  },
  react: {
    color: "bg-blue-300",
    text: "React",
  },
  next: {
    color: "bg-black text-white",
    text: "Next",
  },
  svelte: {
    color: "bg-orange-600",
    text: "Svelte",
  },
};
</script>
