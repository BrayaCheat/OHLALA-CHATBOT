<template>
  <div class="flex flex-col items-center justify-center flex-1 h-[70vh] gap-3">
    <component :is="Brain" class="size-20 text-muted-foreground animate-pulse"/>
    <span class="text-muted-foreground text-center text-wrap px-3">{{ message }}</span>
  </div>
</template>

<script setup>
  import { Brain } from 'lucide-vue-next';
  const message = ref("Welcome to OHLELE. Ready to brainstorm? Share your ideas below.")
</script>