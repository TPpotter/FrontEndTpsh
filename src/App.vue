<template>
  <div class="h-screen grid grid-cols-[120px_auto]">
    <aside class="flex flex-col items-center border-r border-white bg-sidebar">
      <div class="mt-12 space-y-12">
        <div>
          <router-link to="/">
            <div class="flex justify-center w-16 h-16 rounded-lg bg-green-600 text-white cursor-pointer">
              <RectangleGroupIcon class="w-10" />
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/about">
            <div class="flex justify-center w-16 h-16 rounded-lg bg-white cursor-pointer">
              <ComputerDesktopIcon class="w-10" />
            </div>
          </router-link>
        </div>
      </div>

      <div class="mt-auto mb-12">
        <div class="flex justify-center w-16 h-16 rounded-lg bg-white cursor-pointer" @click="updateCharts()">
          <ArrowPathIcon class="w-10" />
        </div>
      </div>
    </aside>
    <router-view class="bg-primary" />
  </div>
</template>
<script>
import { ComputerDesktopIcon, RectangleGroupIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
export default {
  name: 'App',
  components: {
    ComputerDesktopIcon,
    RectangleGroupIcon,
    ArrowPathIcon,
  },
};
</script>
