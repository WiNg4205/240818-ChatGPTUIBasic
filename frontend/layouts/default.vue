<template>
  <div class="flex bg-mainBg h-screen w-screen relative">
    <AppSidebar v-if="openSidebar" :toggleSidebar="toggleSidebar" />
    <div class="w-full h-full flex flex-col justify-between">
      <Header :openSidebar="openSidebar" :toggleSidebar="toggleSidebar" />
      <slot class="flex-grow" />
      <Chatbox />
    </div>
  </div>
  <QuestionMarkCircleIcon class="absolute bottom-3 right-3 size-6 text-neutral-600 cursor-pointer" />
</template>

<script setup>
  import { ref } from 'vue'
  import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'

  const openSidebar = ref(true)

  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value
  }
</script>
