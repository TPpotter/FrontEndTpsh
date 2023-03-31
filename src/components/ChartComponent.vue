<template>
  <div class="flex flex-col px-6 py-4 bg-white">
    <!-- Весь верхний ряд-->
    <div id="top_row" class="flex w-full mb-6 justify-between">
      <h2 id="name_of_chart" class="text-3xl">{{ chartData.title }}</h2>
      <!-- Группа всех кнопок верхних -->
      <div id="all_buttons_group" class="text-white text-xl font-light">
        <div class="inline-flex items-center justify-between w-56 h-9 px-2 mr-11 bg-buttons rounded-lg">
          <span>В секундах</span>
          <ChevronDownIcon class="w-5 h-5 self-center" />
        </div>
        <!-- Группа кнопок Мин Сред Макс -->
        <div id="functional_buttons" class="inline-flex w-96 h-9 space-x-0.5">
          <div class="flex flex-1 items-center bg-buttons rounded-l-lg">
            <span class="mx-auto">Мин</span>
          </div>
          <div class="flex flex-1 items-center bg-buttons">
            <span class="mx-auto">Сред</span>
          </div>
          <div class="flex flex-1 items-center bg-buttons rounded-r-lg">
            <span class="mx-auto">Макс</span>
          </div>
        </div>
      </div>
    </div>

    <div id="bottom_row" class="flex h-full text-lg">
      <!-- Легенда графика -->
      <div id="legend" class="w-1/5 bg-white space-y-4">
        <div id="max" class="flex items-center">
          <div class="min-h-6 min-w-6 mr-6 bg-blue-600"></div>
          <span>Максимальное значение</span>
        </div>
        <div id="average" class="flex items-center">
          <div class="min-h-6 min-w-6 mr-6 bg-blue-500"></div>
          <span>Среднее значение</span>
        </div>
        <div id="min" class="flex items-center">
          <div class="min-h-6 min-w-6 mr-6 bg-blue-400"></div>
          <span>Минимальное значение</span>
        </div>
      </div>
      <!-- График -->
      <div id="chart" class="w-full h-full">
        <apexchart v-if="series.length > 0" :height="'100%'" :options="chartOptions" :series="series" />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
export default {
  name: 'ChartComponent',
  components: {
    ChevronDownIcon,
  },

  data() {
    return {};
  },

  mounted() {},

  props: {
    chartData: {
      default: () => {},
      type: Object,
    },
  },

  computed: {
    series() {
      return this.chartData.graphs;
    },

    chartOptions() {
      return {
        chart: {
          type: 'line',
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        legend: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: this.chartData.categories,
        },
      };
    },
  },
};
</script>
