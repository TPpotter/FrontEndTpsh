import { acceptHMRUpdate, defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    selectedComputer: null,
    selectedBuilding: null,
    selectedRoom: null,
    charts: [],
    chartUnits: {
      co2: { id: 'minutes', name: 'В минутах' },
      consumption: { id: 'minutes', name: 'В минутах' },
    },
  }),
  actions: {
    selectComputer(computer) {
      this.selectedComputer = computer;
    },
    selectBuilding(building) {
      this.selectedBuilding = building;
    },
    selectRoom(room) {
      this.selectedRoom = room;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
