<template>
  <main class="grid grid-rows-2">
    <ChartComponent
      v-for="chart in charts"
      :key="chart.id"
      :chartData="chart"
      :isLoading="isLoading"
      class="mx-10 my-4 rounded-lg"
    />
  </main>
</template>

<script>
import ChartComponent from '@/components/ChartComponent.vue';
import axios from 'axios';
import { mapState, mapWritableState } from 'pinia';
import { useStore } from '@/store';
export default {
  name: 'HomeView',
  components: {
    ChartComponent,
  },

  data() {
    return {
      store: useStore(),
      isLoading: false,
    };
  },

  computed: {
    ...mapState(useStore, ['chartUnits', 'selectedComputer']),
    ...mapWritableState(useStore, ['charts']),
  },

  async mounted() {
    await this.updateCharts();
    this.store.$subscribe(async (mutation) => {
      if (['co2', 'consumption', 'selectedComputer'].includes(mutation.events.key)) {
        await this.updateCharts();
      }
    });
  },

  unmounted() {
    this.store.$dispose();
  },

  methods: {
    serializeData(data) {
      return [
        {
          id: 'max',
          name: 'Максимальное значение',
          data: data.map((d) => ({ x: d.date, y: d.value_max })),
        },
        {
          id: 'avg',
          name: 'Среднее значение',
          data: data.map((d) => ({ x: d.date, y: d.value_avg })),
        },
        {
          id: 'min',
          name: 'Минимальное значение',
          data: data.map((d) => ({ x: d.date, y: d.value_min })),
        },
        {
          id: 'sum',
          name: 'Суммарное значение',
          data: data.map((d) => ({ x: d.date, y: d.value_sum })),
        },
      ];
    },

    async updateCharts() {
      this.isLoading = true;

      const co2Data = await axios
        .get(`/api/graph/co2`, {
          params: {
            unit: this.chartUnits.co2.id,
            ...(this.selectedComputer && { computer_id: this.selectedComputer.id }),
          },
        })
        .then(({ data }) => data);

      const consumptionData = await axios
        .get(`/api/graph/consumption`, {
          params: {
            unit: this.chartUnits.consumption.id,
            ...(this.selectedComputer && { computer_id: this.selectedComputer.id }),
          },
        })
        .then(({ data }) => data);

      const consumption = {
        id: 'consumption',
        title: 'Потребление мошности, кВт',
        graphs: this.serializeData(consumptionData),
      };

      const co2 = {
        id: 'co2',
        title: 'Выделение CO2, кг',
        graphs: this.serializeData(co2Data),
      };

      this.charts = [consumption, co2];

      this.isLoading = false;
    },
  },
};
</script>
