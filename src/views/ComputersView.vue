<template>
  <div class="grid grid-rows-[72px_auto] w-full h-full px-16 pt-14 overflo`w-hidden">
    <div id="computers_header" class="flex justify-between">
      <div>
        <span class="text-light text-2xl font-bold">Количество компьютеров: {{ filteredComputers.length || 0 }}</span>
      </div>
      <div>
        <SelectorComponent
          class="mr-11"
          :list="buildings"
          :defaultValue="selectedBuilding"
          @updateItem="(newItem) => updateBuilding(newItem)"
        />
        <!--        <SelectorComponent :list="rooms" :defaultValue="selectedRoom" @updateItem="(newItem) => updateRoom(newItem)" />-->
      </div>
    </div>
    <div id="computers" class="w-full h-min grid grid-cols-4 gap-x-10 overflow-y-auto">
      <ComputerCard
        v-for="computer in filteredComputers"
        :key="computer.id"
        :data="computer"
        class="mb-10"
        @click="updateComputer(computer)"
      />
    </div>
  </div>
</template>

<script>
import ComputerCard from '@/components/ComputerCard.vue';
import SelectorComponent from '@/components/SelectorComponent.vue';
import { useStore } from '@/store/index.js';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'ComputersView',
  components: { ComputerCard, SelectorComponent },

  data() {
    return {
      buildings: [{ id: '0', name: '- не выбрано -' }],
      rooms: [{ id: '0', name: '- не выбрано -' }],
    };
  },
  async mounted() {
    this.buildings.push(...this.availableBuildings);
  },
  computed: {
    ...mapState(useStore, [
      'selectedComputer',
      'selectedRoom',
      'selectedBuilding',
      'availableBuildings',
      'availableComputers',
    ]),

    filteredComputers() {
      if (!this.selectedBuilding || this.selectedBuilding.id === '0') return this.availableComputers;
      return this.availableComputers.filter((c) => c.building === this.selectedBuilding.id);
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
