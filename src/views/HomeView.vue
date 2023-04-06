<template>
  <main class="grid grid-rows-2">
    <ChartComponent v-for="chart in charts" :key="chart.id" :chartData="chart" class="mx-10 my-4 rounded-lg" />
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
    };
  },

  computed: {
    ...mapState(useStore, ['chartUnits']),
    ...mapWritableState(useStore, ['charts']),
  },

  async mounted() {
    await this.updateCharts();

    this.store.$subscribe(async (mutation) => {
      if (mutation.events.key === 'co2' || mutation.events.key === 'consumption') {
        await this.updateCharts();
      }
    });
  },

  methods: {
    serializeData(data) {
      return [
        {
          name: 'Max',
          data: data.map((d) => ({ x: d.date, y: d.value_max })),
        },
        {
          name: 'Average',
          data: data.map((d) => ({ x: d.date, y: d.value_avg })),
        },
        {
          name: 'Min',
          data: data.map((d) => ({ x: d.date, y: d.value_min })),
        },
      ];
    },

    async updateCharts() {
      const co2Data = await axios
        .get(`/api/graph/co2`, {
          params: {
            unit: this.chartUnits.co2.id,
          },
        })
        .then(({ data }) => data);

      const consumptionData = await axios
        .get(`/api/graph/consumption`, {
          params: {
            unit: this.chartUnits.consumption.id,
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
    },
  },
};
</script>
