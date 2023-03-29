<template>
  <div class="flex flex-col px-6 py-4 space-y-6 bg-white">
    <div id="top_row" class="flex justify-between w-full"> <!-- Весь верхний ряд-->
      <h2 class="text-3xl">Потребление мощности, кВт</h2>
      <div id="all_buttons_group" class="flex text-xl font-light text-white"> <!-- Группа всех кнопок верхних -->
        <div class="flex justify-between w-56 h-8 px-2 mr-11 bg-buttons rounded-lg">
          <span>В секундах</span>
          <ChevronDownIcon class="w-5 h-5 self-center" />
        </div>
        <div id="functional_buttons" class="flex w-96 h-8 space-x-0.5"> <!-- Группа кнопок Мин Сред Макс -->
          <div class="flex-1 text-center bg-buttons rounded-l-lg">
            <span class="mx-auto">Мин</span>
          </div>
          <div class="flex-1 text-center bg-buttons">
            <span class="mx-auto">Сред</span>
          </div>
          <div class="flex-1 text-center bg-buttons rounded-r-lg">
            <span class="mx-auto">Макс</span>
          </div>
        </div>
      </div>
    </div>

    <div id="bottom_row" class="flex h-full flex-row space-x-9">
      <div id="legend" class="flex bg-white flex-col space-y-4"> <!-- Легенда графика -->
        <div id="max" class="flex">
          <div class="h-6 w-6 mr-6 bg-blue-600"></div>
          <span>Максимальное значение</span>
        </div>
        <div id="average" class="flex">
          <div class="h-6 w-6 mr-6 bg-blue-500"></div>
          <span>Среднее значение</span>
        </div>
        <div id="min" class="flex">
          <div class="h-6 w-6 mr-6 bg-blue-400"></div>
          <span>Минимальное значение</span>
        </div>
      </div>
      <div id="chart" class="flex-auto bg-emerald-600"></div> <!-- График -->
    </div>

  </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

export default {
  name: "ChartComponent",
  components: {
    ChevronDownIcon,
  },
};
</script>
