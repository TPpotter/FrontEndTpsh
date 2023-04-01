<template>
  <main class="grid grid-rows-2 bg-primary">
    <ChartComponent :chartData="charts[0]" ref="chart1" class="mx-10 my-4 rounded-lg" />
    <ChartComponent :chartData="charts[1]" ref="chart2" class="mx-10 my-4 rounded-lg" />
  </main>
</template>

<script>
import ChartComponent from '@/components/ChartComponent.vue';
export default {
  name: 'HomeView',
  components: {
    ChartComponent,
  },

  data() {
    return {
      charts: [
        {
          title: 'Потребление мошности, кВт',
          graphs: [
            {
              name: 'Max',
              data: [90, 80, 98, 87],
            }, // Максимальное
            {
              name: 'Average',
              data: [60, 65, 67, 59],
            }, // Среднее
            {
              name: 'Min',
              data: [20, 24, 31, 12],
            }, // Минималное
          ],
          categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        },

        {
          title: 'Выделение CO2, кг',
          graphs: [
            {
              name: 'Max',
              data: [90, 80, 98, 87],
            }, // Максимальное
            {
              name: 'Average',
              data: [60, 65, 67, 59],
            }, // Среднее
            {
              name: 'Min',
              data: [20, 24, 31, 12],
            }, // Минималное
          ],
          categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        },
      ],
    };
  },

  mounted() {
    // setInterval(() => {
    //   this.charts[0].graphs.map((g, idx) => g.data.push((4 - idx) * 10));
    //   this.charts[0].categories.push("May");
    // }, 2000);
  },

  methods: {
    updateCharts() {
      console.log(this.$refs.chart1);
      return 0;
    },
  },
};
</script>
