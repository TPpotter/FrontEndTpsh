<template>
  <div
    class="grid grid-rows-[minmax(32px, auto)_auto] h-max w-full px-5 py-4 bg-secondary rounded-xl xl:text-lg text-light"
  >
    <div id="header" class="flex items-center w-full pb-6">
      <div class="flex items-center justify-center min-h-9 min-w-9 mr-2.5 rounded-full bg-default-blue">
        <ComputerDesktopIcon class="h-5 w-5 text-light" />
      </div>
      <span class="text-light">Компьютер #1213</span>
    </div>
    <div id="info" class="xl:grid grid-cols-[2fr_1fr]">
      <div id="stat">
        <div id="electricity" class="flex flex-col pb-2">
          <span class="underline text-md xl:text-lg">Электропотребление, кВт</span>
          <span class="font-semibold">0.1345728348</span>
        </div>
        <div id="co2" class="flex flex-col">
          <span class="underline text-md xl:text-lg">CO2, кг</span>
          <span class="font-semibold">0.4267912945</span>
        </div>
      </div>
      <div id="cost" class="xl:relative pt-4 xl:pt-0">
        <div class="xl:absolute bottom-0 right-0 w-32 py-0.5 rounded-xl bg-default-green xl:text-right">
          <span class="pl-2 xl:pr-2 font-semibold">100000$</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ComputerDesktopIcon } from '@heroicons/vue/24/outline';
export default {
  name: 'ChartComponent',
  components: { ComputerDesktopIcon },
};
</script>
