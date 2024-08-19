<template>
  <div class="h-20 flex flex-col items-center justify-around">
    <div class="flex justify-between w-1/2 h-12 bg-iconHover items-center rounded-full p-2">
      <PaperClipIcon class="size-10 p-2 text-white cursor-pointer" />
      <input class="flex-grow bg-iconHover focus:outline-none caret-white text-white" type="text" placeholder="Message ChatGPT"/>
      <ArrowUpCircleIcon class="size-10 text-white cursor-pointer" />
    </div>
    <span class="text-xs text-icons text-center">ChatGPT can make mistakes. Check important info.</span>
  </div>
</template>

<script setup>
  import { PaperClipIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/outline'
</script>