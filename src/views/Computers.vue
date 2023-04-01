<template>
  <div class="w-full h-full">
    <div id="computers_header"></div>
    <div id="computers" class="w-full h-full max-h-screen grid grid-cols-4 gap-4 overflow-y-auto">
      <div v-for="el in arr" :key="el" class="min-h-[240px] bg-red-600"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComputersView',
  components: {},

  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    };
  },
};
</script>
