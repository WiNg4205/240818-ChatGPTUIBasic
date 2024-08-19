<template>
  <div class="bg-sidebarBg flex flex-col w-72 px-2">
    <div class="flex justify-between items-center h-14 py-4 px-2">
      <Bars3Icon class="size-10 p-2 text-icons rounded-lg hover:bg-mainBg cursor-pointer" @click="toggleSidebar" />
      <PencilSquareIcon class="size-10 p-2 text-icons rounded-lg hover:bg-mainBg cursor-pointer" />
    </div>
    <div class="flex-grow">
      <div class="flex items-center rounded-lg hover:bg-mainBg gap-3 p-2 cursor-pointer">
        <img :src="IconLogo" alt="Logo" class="size-4" />
        <span class="text-gray-200 text-sm">ChatGPT</span>
      </div>
      <div class="flex items-center rounded-lg hover:bg-mainBg gap-3 p-2 cursor-pointer">
        <PaintBrushIcon class="size-4 text-icons hover:bg-mainBg" />
        <span class="text-gray-200 text-sm">Logo Creator</span>
      </div>
      <div class="flex items-center rounded-lg hover:bg-mainBg gap-3 p-2 cursor-pointer">
        <Squares2X2Icon class="size-4 text-icons hover:bg-mainBg" />
        <span class="text-gray-200 text-sm">Explore GPTs</span>        
      </div>
    </div>
    <div class="h-14 mb-2 flex items-center rounded-lg hover:bg-mainBg gap-2 px-2 cursor-pointer">
      <SparklesIcon class="size-6 p-1 bg-neutral-900 text-white rounded-full border border-neutral-700" />
      <div>
        <h2 class="text-white text-sm">Upgrade plan</h2>
        <h3 class="text-gray-400 text-xs">Get GPT-4, DALL·E, and more</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Bars3Icon, PencilSquareIcon, PaintBrushIcon, Squares2X2Icon, SparklesIcon } from '@heroicons/vue/24/outline'
  import IconLogo from '../public/ChatGPT-Logo.svg'

  const props = defineProps({
    toggleSidebar: Function
  })
</script>
