<template>
  <div class="flex h-14 justify-between items-center p-4">
    <div class="flex items-center">
      <Bars3Icon v-if="!openSidebar" class="size-10 p-2 text-icons rounded-lg hover:bg-iconHover" @click="toggleSidebar" />
      <PencilSquareIcon v-if="!openSidebar" class="size-10 p-2 text-icons rounded-lg hover:bg-iconHover" @click="toggleSidebar" />
      <div class="flex items-center py-2 px-3 rounded-lg hover:bg-iconHover gap-1 cursor-pointer">
        <h1 class="text-icons text-lg rounded-lg font-semibold">ChatGPT</h1>
        <ChevronDownIcon class="size-4 text-icons" />
      </div>      
    </div>
    <div class="flex items-center gap-5">
      <ArrowUpTrayIcon class="size-10 p-2 text-icons rounded-lg hover:bg-iconHover cursor-pointer" />
      <div class="p-1 rounded-full hover:bg-iconHover cursor-pointer">
        <div class="bg-userIcon text-white size-8 rounded-full flex items-center justify-center">
          <span>W</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Bars3Icon, PencilSquareIcon, ChevronDownIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/outline'

  const props = defineProps({
    openSidebar: Boolean,
    toggleSidebar: Function
  })
</script>
