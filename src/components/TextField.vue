<script setup lang="ts">
import { defineModel, defineEmits } from 'vue'

const value = defineModel()
</script>

<template>
  <div class="text-field">
    <input type="text" v-model="value" />
  </div>
</template>

<style scoped lang="scss">
input[type='text'] {
  padding: 12px 20px;
  border-radius: 4px;
}
</style>
