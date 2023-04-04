<template>
  <div class="grid grid-rows-[72px_auto] w-full h-full px-16 pt-14 overflow-hidden">
    <div id="computers_header" class="flex justify-between">
      <div><span class="text-light text-2xl font-bold">Количество компьютеров: 2000</span></div>
      <div>
        <SelecterComponent class="mr-11" :list="buildings" @updateItem="(newItem) => updateBuilding(newItem)" />
        <SelecterComponent :list="rooms" @updateItem="(newItem) => updateRoom(newItem)" />
      </div>
    </div>
    <div id="computers" class="w-full h-full grid grid-cols-4 gap-x-10 overflow-y-auto">
      <ComputerCard v-for="el in arr" :key="el" class="mb-10"></ComputerCard>
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
      buildings: [
        {
          id: 'A',
          name: 'Корпус A',
        },
        {
          id: 'B',
          name: 'Корпус B',
        },
      ],
      rooms: [
        {
          id: '701',
          name: 'Аудитория 701',
        },
        {
          id: '702',
          name: 'Аудитория 702',
        },
        {
          id: '703',
          name: 'Аудитория 703',
        },
      ],
      selectedBuilding: null,
      selectedRoom: null,
    };
  },

  methods: {
    updateBuilding(newBuilding) {
      this.selectedBuilding = newBuilding;
    },
    updateRoom(newRoom) {
      this.selectedRoom = newRoom;
    },
  },
};
</script>
