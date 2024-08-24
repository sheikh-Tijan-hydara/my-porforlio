<script setup>
import ProgressBar from "primevue/progressbar";

const props = defineProps({
  targetValue: {
    type: String,
    required: true,
  },
});

const value = ref(0);

onMounted(() => {
  setTimeout(() => {
    value.value = props.targetValue;
  }, 1000);
});
</script>

<template>
  <ProgressBar
    :value="value"
    :pt="{
      root: {
        style: {
          height: '14px',
          width: '100%',
          borderRadius: '8px',
        },
        class: 'bg-gray-200 overflow-hidden',
      },
      value: {
        class:
          'bg-green-500 h-full rounded-xl transition-all duration-1000 ease-out',
      },
    }"
    :pt-options="{
      mergeSections: false,
      mergeProps: false,
    }"
  >
    <span></span>
  </ProgressBar>
</template>
