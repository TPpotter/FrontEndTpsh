<template>
  <div class="h-screen grid grid-cols-[120px_auto]">
    <aside class="flex flex-col items-center border-r border-white bg-sidebar">
      <div class="mt-12 space-y-12">
        <div class="flex justify-center w-16 h-16 rounded-lg bg-white">
          <RectangleGroupIcon class="w-10" />
        </div>

        <div class="flex justify-center w-16 h-16 rounded-lg bg-white">
          <ComputerDesktopIcon class="w-10" />
        </div>
      </div>

      <div class="mt-auto mb-12">
        <div class="flex justify-center w-16 h-16 rounded-lg bg-white">
          <ArrowPathIcon class="w-10" />
        </div>
      </div>
    </aside>

    <main class="grid grid-rows-2 bg-primary">
      <ChartComponent :chartData="charts[0]" class="mx-10 my-4 rounded-lg" />
      <ChartComponent :chartData="charts[1]" class="mx-10 my-4 rounded-lg" />
    </main>
  </div>
</template>

<script>
import { ComputerDesktopIcon, RectangleGroupIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import ChartComponent from '@/components/ChartComponent.vue';

export default {
  name: 'App',
  components: {
    ComputerDesktopIcon,
    RectangleGroupIcon,
    ArrowPathIcon,
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
};
</script>
