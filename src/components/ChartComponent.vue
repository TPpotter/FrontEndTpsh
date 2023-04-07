<template>
  <div class="flex flex-col px-6 py-4 bg-light">
    <!-- Весь верхний ряд-->
    <div id="top_row" class="flex w-full mb-6 justify-between items-center">
      <h2 id="name_of_chart" class="text-2xl xl:text-3xl">{{ chartData.title }}</h2>
      <!-- Группа всех кнопок верхних -->
      <div id="all_buttons_group" class="text-light text-lg xl:text-xl font-light">
        <!-- ListBox -->
        <SelectorComponent
          :list="units"
          :defaultValue="chartUnits[chartData.id]"
          @updateItem="(newState) => updateUnit(newState)"
        />
        <!-- Группа кнопок Мин Сред Макс -->
        <div
          v-if="!selectedComputer"
          id="functional_buttons"
          class="inline-flex w-80 xl:w-96 h-7 xl:h-9 ml-11 space-x-0.5"
        >
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

    <div class="flex h-full items-center bg-black opacity-50 rounded-lg" :class="{ hidden: !isLoading }">
      <svg
        class="animate-spin h-20 w-20 mx-auto text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-70"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div id="bottom_row" class="grid grid-cols-[15%_auto] h-full text-md" :class="{ hidden: isLoading }">
      <div class="flex flex-col h-full">
        <!-- Легенда графика -->

        <div id="legend" class="w-max bg-light space-y-4">
          <div v-for="s in series" :key="s.id" class="flex items-center">
            <div
              class="min-h-5 min-w-5 xl:min-h-6 xl:min-w-6 mr-5 xl:mr-6"
              :style="{
                backgroundColor: s.id === 'min' ? '#60a5fa' : s.id === 'avg' ? '#3b82f6' : '#2563eb',
              }"
            ></div>
            <span>{{ s.name }}</span>
          </div>
        </div>
        <div v-if="selectedComputer" class="mt-auto text-gray-400 text-lg">
          <span class="block">Компьютер #{{ selectedComputer.name }}</span>
          <span class="block">Аудитория {{ selectedComputer.classroom }}</span>
        </div>
      </div>
      <!-- График -->
      <div id="chart" class="h-full">
        <apexchart :height="'100%'" :options="chartOptions" :series="series" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorComponent from '@/components/SelectorComponent.vue';
import { useStore } from '@/store/index.js';
import { mapActions, mapState } from 'pinia';
export default {
  name: 'ChartComponent',
  components: { SelectorComponent },

  data() {
    return {
      units: [
        { id: 'minutes', name: 'В минутах' },
        { id: 'hours', name: 'В часах' },
        { id: 'days', name: 'В днях' },
        { id: 'weeks', name: 'В неделях' },
        { id: 'years', name: 'В годах' },
      ],
      aggs: [
        { id: 'min', name: 'Мин' },
        { id: 'avg', name: 'Сред' },
        { id: 'max', name: 'Макс' },
      ],
      selectedAggs: ['min', 'avg', 'max'],
      store: useStore(),
    };
  },

  props: {
    chartData: {
      default: () => null,
      type: Object,
    },
    isLoading: {
      default: () => false,
      type: Boolean,
    },
  },

  computed: {
    ...mapState(useStore, ['selectedComputer', 'selectedBuilding', 'selectedRoom', 'chartUnits']),

    series() {
      return this.selectedComputer
        ? this.chartData.graphs?.filter((g) => g.id === 'sum')
        : this.chartData.graphs?.filter((g) => this.selectedAggs.includes(g.id));
    },

    chartOptions() {
      return {
        chart: {
          type: 'line',
          zoom: {
            enabled: false,
          },
          animations: {
            enabled: false,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 100,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 100,
            },
          },
        },
        noData: {
          text: 'Loading...',
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
        tooltip: {
          enabled: false,
        },
        yaxis: {
          labels: {
            formatter: (value) => {
              return Number(value).toFixed(5);
            },
          },
        },
        colors: ['#2563eb', '#3b82f6', '#60a5fa'],
      };
    },
  },

  methods: {
    ...mapActions(useStore, ['changeChartUnit']),

    selectAggs(agg) {
      if (this.selectedAggs.includes(agg.id)) {
        this.selectedAggs = this.selectedAggs.filter((sagg) => sagg !== agg.id);
        return;
      }
      this.selectedAggs.push(agg.id);
    },

    updateUnit(newUnit) {
      this.changeChartUnit(this.chartData.id, newUnit);
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
