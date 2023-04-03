<template>
  <div class="flex flex-col px-6 py-4 bg-light">
    <!-- Весь верхний ряд-->
    <div id="top_row" class="flex w-full mb-6 justify-between items-center">
      <h2 id="name_of_chart" class="text-2xl xl:text-3xl">{{ chartData.title }}</h2>
      <!-- Группа всех кнопок верхних -->
      <div id="all_buttons_group" class="text-light text-lg xl:text-xl font-light">
        <!-- ListBox -->
        <SelecterComponent class="mr-11" :list="units" @updateItem="(newState) => updateUnit(newState)" />
        <!-- Группа кнопок Мин Сред Макс -->
        <div id="functional_buttons" class="inline-flex w-80 xl:w-96 h-7 xl:h-9 space-x-0.5">
          <div
            v-for="agg in aggs"
            :key="agg.id"
            class="relative flex flex-1 items-center bg-secondary border border-button cursor-pointer overflow-hidden"
            :class="{ 'rounded-l-lg': agg.id === 'min', 'rounded-r-lg': agg.id === 'max' }"
            @click="selectAggs(agg)"
          >
            <div v-if="!selectedAggs.includes(agg.id)" class="absolute w-full h-full bg-black opacity-50"></div>
            <span class="mx-auto">{{ agg.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="bottom_row" class="flex h-full text-md xl:text-lg">
      <!-- Легенда графика -->
      <div id="legend" class="w-1/5 bg-light space-y-4">
        <div id="max" class="flex items-center">
          <div class="min-h-5 min-w-5 xl:min-h-6 xl:min-w-6 mr-5 xl:mr-6 bg-blue-600"></div>
          <span>Максимальное значение</span>
        </div>
        <div id="average" class="flex items-center">
          <div class="min-h-5 min-w-5 xl:min-h-6 xl:min-w-6 mr-5 xl:mr-6 bg-blue-500"></div>
          <span>Среднее значение</span>
        </div>
        <div id="min" class="flex items-center">
          <div class="min-h-5 min-w-5 xl:min-h-6 xl:min-w-6 mr-5 xl:mr-6 bg-blue-400"></div>
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
import SelecterComponent from '@/components/SelecterComponent.vue';
export default {
  name: 'ChartComponent',
  components: { SelecterComponent },

  data() {
    return {
      units: [
        { id: 'hour', name: 'В часах' },
        { id: 'day', name: 'В днях' },
        { id: 'week', name: 'В неделях' },
        { id: 'year', name: 'В годах' },
      ],
      selectedUnit: null,
      aggs: [
        { id: 'min', name: 'Мин' },
        { id: 'avg', name: 'Сред' },
        { id: 'max', name: 'Макс' },
      ],
      selectedAggs: [],
    };
  },

  mounted() {
    this.selectedUnit = this.units[0];
    this.selectedAggs = this.aggs.map((agg) => agg.id);
  },

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
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: this.chartData.categories,
        },
        tooltip: {
          enabled: false,
        },
        colors: ['#2563eb', '#3b82f6', '#60a5fa'],
      };
    },
  },

  methods: {
    selectAggs(agg) {
      if (this.selectedAggs.includes(agg.id)) {
        this.selectedAggs = this.selectedAggs.filter((sagg) => sagg !== agg.id);
        return;
      }
      this.selectedAggs.push(agg.id);
    },
    updateUnit(newUnit) {
      this.selectedUnit = newUnit;
    },
  },
};
</script>

<style>
.rise-enter-active {
  animation: rise-in 0.1s ease-in;
}
.rise-leave-active {
  animation: rise-in 0.1s ease-in reverse;
}
@keyframes rise-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
