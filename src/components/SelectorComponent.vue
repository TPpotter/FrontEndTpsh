<template>
  <div
    class="inline-block relative w-56 h-7 xl:h-9 bg-secondary rounded-lg z-50 text-light text-lg xl:text-xl font-light"
  >
    <Listbox v-model="selectedItem" v-slot="{ open }">
      <ListboxButton class="flex justify-between items-center w-full h-full px-3 rounded-lg bg-secondary">
        <span>{{ selectedItem?.name }}</span>
        <span class="pointer-events-none flex items-center">
          <ChevronDownIcon :class="{ 'rotate-180': open }" class="h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <Transition name="rise">
        <ListboxOptions class="absolute max-h-60 w-full bg-secondary mt-1 overflow-auto rounded-md shadow-lg">
          <ListboxOption v-slot="{ active, selected }" v-for="el in list" :key="el.id" :value="el" as="template">
            <li :class="[active ? 'bg-default-green' : '', 'relative cursor-default select-none py-2 pl-10 pr-4']">
              <span :class="[selected ? 'font-base' : 'font-light', 'block truncate']">{{ el.name }}</span>
              <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </Listbox>
  </div>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
export default {
  name: 'SelectorComponent',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    ChevronDownIcon,
  },
  data() {
    return { selectedItem: null };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    defaultValue: null,
  },
  mounted() {
    this.selectedItem = this.list.find((el) => el.id === this.defaultValue.id) || this.list[0];
  },

  watch: {
    selectedItem(newState) {
      this.$emit('updateItem', newState);
    },
  },
};
</script>

<style scoped></style>
