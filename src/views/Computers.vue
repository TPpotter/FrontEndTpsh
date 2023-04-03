<template>
  <div class="w-full h-full">
    <div id="computers_header" class="flex justify-between h-40">
      <div><span class="text-white">Количество компьютеров: 2000</span></div>
      <div>
        <SelecterComponent :list="buildings" />
        <SelecterComponent :list="rooms" />
      </div>
    </div>
    <div id="computers" class="hidden w-full h-full max-h-screen grid grid-cols-4 gap-x-10 gap-y-5 overflow-y-auto">
      <ComputerCard v-for="el in arr" :key="el"></ComputerCard>
    </div>
  </div>
</template>

<script>
import ComputerCard from '@/components/ComputerCard.vue';
import SelecterComponent from '@/components/SelecterComponent.vue';
export default {
  name: 'ComputersView',
  components: { ComputerCard, SelecterComponent },

  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      buildings: ['A', 'B', 'C'],
      rooms: [1, 2, 3, 4],
    };
  },
};
</script>
