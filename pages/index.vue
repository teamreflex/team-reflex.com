<template>
  <main
    class="h-dvh w-dvw flex flex-col gap-6 items-center justify-center bg-slate-950"
  >
    <Logo />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8">
      <Project
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>

    <div class="flex flex-row gap-6 items-center justify-center">
      <a href="https://github.com/teamreflex">
        <Github :size="48" class="text-blue-500 fill-current animate-hue" />
      </a>
      <a href="https://twitter.com/Reflexgg">
        <Twitter :size="48" class="text-blue-500 fill-current animate-hue" />
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Github, Twitter } from "lucide-vue-next";
import type { ProjectItem } from "~/components/project.vue";

const projects: ProjectItem[] = [
  {
    name: "Apollo",
    description: `Unofficial desktop interface for "Cosmo the Gate"`,
    link: "https://apollo.cafe",
    type: "next",
  },
  {
    name: "fab-fetch",
    description: "Fetch and archive content from Fab",
    link: "https://github.com/teamreflex/fab-fetch",
    type: "ts",
  },
  {
    name: "Objekts",
    description: "View ARTMS & tripleS Objekt NFTs",
    link: "https://github.com/teamreflex/objekts-svelte",
    type: "svelte",
  },
  {
    name: "ChallongePHP",
    description: "Package for interfacing with the Challonge API",
    link: "https://github.com/teamreflex/ChallongePHP",
    type: "php",
  },
];
</script>
