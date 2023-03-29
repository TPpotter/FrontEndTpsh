<template>
  <div class="flex flex-col px-6 py-4 space-y-6 bg-white">
    <div id="top_row" class="flex justify-between w-full"> <!-- Весь верхний ряд-->
      <h2 class="text-4xl ml-2">Потребление мощности, кВт</h2>
      <div id="all_buttons_group" class="flex text-2xl text-white"> <!-- Группа всех кнопок верхних -->
        <div class="flex items-center justify-center justify-between w-48 h-9 mr-11 pr-3 bg-buttons rounded-lg">
          <span class="flex mx-auto text-lg">В секундах</span>
          <ChevronDownIcon class="justify-center w-5 h-5"/>
        </div>
        <div id="functional_buttons" class="flex w-96 h-9 space-x-1"> <!-- Группа кнопок Мин Сред Макс -->
          <div class="flex flex-1 items-center justify-center bg-buttons rounded-l-lg">
            <span class="mx-auto text-lg">Мин</span>
          </div>
          <div class="flex flex-1 items-center justify-center bg-buttons">
            <span class="mx-auto text-lg">Сред</span>
          </div>
          <div class="flex flex-1 items-center justify-center bg-buttons rounded-r-lg">
            <span class="mx-auto text-lg">Макс</span>
          </div>
        </div>
      </div>
    </div>

    <div id="bottom_row" class="flex h-full flex-row pb-9 pr-9 space-x-9">
      <div id="legend" class="flex px-1 py-3 bg-white flex-col space-y-4"> <!-- Легенда графика -->
        <div id="max" class="flex justify-start space-x-6">
          <div class="h-6 w-6 bg-blue-600"></div>
          <span>Максимальное значение</span></div>
        <div id="average" class="flex justify-start space-x-6">
          <div class="h-6 w-6 bg-blue-500"></div>
          <span>Среднее значение</span></div>
        <div id="min" class="flex justify-start space-x-6">
          <div class="h-6 w-6 bg-blue-400"></div>
          <span>Минимальное значение</span></div>
      </div>
      <div id="chart" class="flex-auto bg-emerald-600"></div> <!-- График -->
    </div>

  </div>
</template>

<script>
import {ChevronDownIcon} from "@heroicons/vue/24/outline"

export default {
  name: "ChartComponent",
  components: {
    ChevronDownIcon
  }
}
</script>