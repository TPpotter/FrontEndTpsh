<template>
  <div class="h-screen grid grid-cols-[120px_auto] select-none text-dark">
    <aside class="flex flex-col items-center bg-secondary">
      <div class="mt-12 space-y-12">
        <div>
          <router-link to="/" v-slot="{ isActive }">
            <div
              class="flex justify-center w-16 h-16 rounded-lg bg-light cursor-pointer hover:bg-default-green hover:text-light"
              :class="{ '!bg-default-green text-light': isActive }"
            >
              <RectangleGroupIcon class="w-10" />
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/about" v-slot="{ isActive }">
            <div
              class="flex justify-center w-16 h-16 rounded-lg bg-light cursor-pointer hover:bg-default-green hover:text-light"
              :class="{ '!bg-default-green text-light': isActive }"
            >
              <ComputerDesktopIcon class="w-10" />
            </div>
          </router-link>
        </div>
      </div>

      <div class="mt-auto mb-12">
        <div
          class="w-16 h-16 rounded-lg bg-white flex items-center justify-center cursor-pointer hover:bg-default-green hover:text-light"
          @click="resetComputer()"
        >
          <ArrowPathIcon class="w-10 flex justify-center" />
        </div>
      </div>
    </aside>
    <router-view class="bg-primary" />
  </div>
</template>
<script>
import { ComputerDesktopIcon, RectangleGroupIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import { useStore } from '@/store';
import { mapWritableState } from 'pinia';

export default {
  name: 'App',
  components: {
    ComputerDesktopIcon,
    RectangleGroupIcon,
    ArrowPathIcon,
  },

  computed: {
    ...mapWritableState(useStore, ['selectedComputer']),
  },

  methods: {
    resetComputer() {
      this.selectedComputer = null;
    },
  },
};
</script>
