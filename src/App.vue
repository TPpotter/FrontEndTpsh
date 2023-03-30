<template>
  <div class="h-screen grid grid-cols-[120px_1fr]">
    <aside class="flex flex-col items-center border-r border-white bg-aside">
      <div class="mt-12 space-y-12">
        <div class="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
          <ComputerDesktopIcon class="w-10"/>
        </div>

        <div class="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
          <RectangleGroupIcon class="w-10 flex justify-center"/>
        </div>
      </div>

      <div class="w-16 h-16 mt-auto mb-12 rounded-lg bg-white flex items-center justify-center">
        <ArrowPathIcon class="w-10 flex justify-center"/>
      </div>
    </aside>

    <main class="grid grid-rows-2 bg-primary">
      <ChartComponent :chartData="charts[0]" class="mx-10 my-4 rounded-lg"/>
<!--      <ChartComponent :chartData="charts[1]" class="mx-10 my-4 rounded-lg"/>-->
    </main>
  </div>
</template>

<script>
import {ComputerDesktopIcon, RectangleGroupIcon, ArrowPathIcon} from "@heroicons/vue/24/outline"
import ChartComponent from '@/components/ChartComponent.vue'

export default {
  name: 'App',
  components: {
    ComputerDesktopIcon,
    RectangleGroupIcon,
    ArrowPathIcon,
    ChartComponent
  },

  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      charts: [

        {
          title: 'Потребление мошности, кВт',
          graphs: [
            {
              name: 'Max',
              data: [90, 80, 98, 87]
            }, // Максимальное
            {
              name: 'Average',
              data: [60, 65, 67, 59]
            }, // Среднее
            {
              name: 'Min',
              data: [20, 24, 31, 12]
            } // Минималное
          ],
        },

        {
          title: 'Выделение CO2',
          graphs: [
            {
              name: 'Max',
              data: [90, 80, 98, 87]
            }, // Максимальное
            {
              name: 'Average',
              data: [60, 65, 67, 59]
            }, // Среднее
            {
              name: 'Min',
              data: [20, 24, 31, 12]
            } // Минималное
          ],
        }

      ]
    }
  }
}
</script>
