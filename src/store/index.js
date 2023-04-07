import { acceptHMRUpdate, defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    availableBuildings: [],
    availableComputers: [],

    selectedComputer: null,
    selectedBuilding: { id: '0', name: '- не выбрано -' },
    selectedRoom: { id: '0', name: '- не выбрано -' },
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
    changeChartUnit(key, unit) {
      this.chartUnits[key] = unit;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
