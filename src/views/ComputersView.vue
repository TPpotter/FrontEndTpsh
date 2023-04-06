<template>
  <div class="grid grid-rows-[72px_auto] w-full h-full px-16 pt-14 overflow-hidden">
    <div id="computers_header" class="flex justify-between">
      <div><span class="text-light text-2xl font-bold">Количество компьютеров: 2000</span></div>
      <div>
        <SelectorComponent
          class="mr-11"
          :list="buildings"
          :defaultValue="selectedBuilding"
          @updateItem="(newItem) => updateBuilding(newItem)"
        />
        <SelectorComponent :list="rooms" :defaultValue="selectedRoom" @updateItem="(newItem) => updateRoom(newItem)" />
      </div>
    </div>
    <div id="computers" class="w-full h-full grid grid-cols-4 gap-x-10 overflow-y-auto">
      <ComputerCard
        v-for="computer in filteredComputers"
        :key="computer.id"
        :data="computer"
        class="mb-10"
        @click="updateComputer(computer.id)"
      />
    </div>
  </div>
</template>

<script>
import ComputerCard from '@/components/ComputerCard.vue';
import SelectorComponent from '@/components/SelectorComponent.vue';
import { useStore } from '@/store/index.js';
import { mapActions, mapState } from 'pinia';
import axios from 'axios';
export default {
  name: 'ComputersView',
  components: { ComputerCard, SelectorComponent },

  data() {
    return {
      computers: [],
      buildings: [
        {
          id: '0',
          name: '- не выбрано -',
        },
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
          id: '0',
          name: '- не выбрано -',
        },
        {
          id: '234',
          name: 'Аудитория 234',
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
    };
  },
  async mounted() {
    this.computers = await axios.get(`/api/computer/`, {}).then(({ data }) => data);
  },
  computed: {
    ...mapState(useStore, ['selectedComputer', 'selectedRoom', 'selectedBuilding']),

    filteredComputers() {
      return this.computers;
      // if (this.selectedBuilding?.id == 0) return this.computers;
      // const filtered = this.computers.filter((c) => c.building == this.selectedBuilding?.id);
      //
      // if (this.selectedRoom?.id == 0) return filtered;
      // return filtered.filter((c) => c.room == this.selectedRoom?.id);
    },
  },

  methods: {
    ...mapActions(useStore, ['selectComputer', 'selectRoom', 'selectBuilding']),

    updateBuilding(building) {
      this.selectBuilding(building);
    },
    updateRoom(room) {
      this.selectRoom(room);
    },
    updateComputer(computerId) {
      this.selectComputer(computerId);
      this.$router.push('/');
    },
  },
};
</script>
