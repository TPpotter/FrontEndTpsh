<template>
  <div class="flex flex-col px-6 py-4 bg-white select-none">
    <!-- Весь верхний ряд-->
    <div id="top_row" class="flex w-full mb-6 justify-between">
      <h2 id="name_of_chart" class="text-3xl">{{ chartData.title }}</h2>
      <!-- Группа всех кнопок верхних -->
      <div id="all_buttons_group" class="flex space-x-11 text-white text-xl font-light">
        <!-- ListBox -->
        <div class="relative w-56 h-9 mr-11 bg-buttons rounded-lg z-50">
          <Listbox v-model="selectedUnit" v-slot="{ open }">
            <ListboxButton class="flex justify-between items-center w-full h-full px-3 rounded-lg bg-buttons">
              <span>{{ selectedUnit?.name }}</span>
              <span class="pointer-events-none flex items-center">
                <ChevronDownIcon :class="{ 'rotate-180': open }" class="h-5 w-5" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-white bg-buttons py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <ListboxOption v-slot="{ active, selected }" v-for="u in unit" :key="u.id" :value="u" as="template">
                  <li :class="[active ? 'bg-green-600' : '', 'relative cursor-default select-none py-2 pl-10 pr-4']">
                    <span :class="[selected ? 'font-medium' : 'font-light', 'block truncate']">{{ u.name }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </Listbox>
        </div>
        <!-- Группа кнопок Мин Сред Макс -->
        <div id="functional_buttons" class="inline-flex w-96 h-9 space-x-0.5">
          <div
            v-for="agg in aggs"
            :key="agg.id"
            class="flex flex-1 items-center cursor-pointer border border-buttons"
            :class="[
              agg.id === 'min' ? 'rounded-l-lg' : agg.id === 'max' ? 'rounded-r-lg' : '',
              selectedAggs.includes(agg.id) ? 'bg-buttons' : 'bg-buttons-disabled text-gray-500',
            ]"
            @click="selectAggs(agg)"
          >
            <span class="text-xl mx-auto">{{ agg.name }}</span>
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
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
export default {
  name: 'ChartComponent',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    ChevronDownIcon,
  },

  data() {
    return {
      unit: [
        { id: 1, name: 'В часах' },
        { id: 2, name: 'В днях' },
        { id: 3, name: 'В неделях' },
        { id: 4, name: 'В годах' },
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
    this.selectedUnit = this.unit[0];
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
  },
};
</script>
