<script setup lang="ts">
import { computed, defineEmits } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps<{
  text: string
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
}>()

const buttonClass = computed(() => {
  return {
    'button green': props.primary,
    'button red': props.secondary,
    'button blue': props.tertiary
  }
})
</script>

<template>
  <div :class="buttonClass" @click="emit('click')">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.button {
  border: none;
  min-width: 2rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  width: max-content;
}

.red {
  background: #ff7b7b;
}

.blue {
  background: #a7addf;
}

.green {
  background: #7bff7b;
}
</style>
