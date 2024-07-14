<script setup lang="ts">
import { ref, watch } from 'vue'
import TextField from '@/components/TextField.vue'

const props = defineProps<{
  searchFunction: Function
  route: string
}>()

const values = ref([])
const content = ref('')

watch(content, async (newValue) => {
  if (!newValue) {
    values.value = []

    return
  }

  const response = await props.searchFunction(newValue)

  values.value = response
})
</script>

<template>
  <div class="search">
    <TextField v-model="content" />
    <div v-if="values" class="search__suggestions">
      <div v-for="value in values" :key="value">
        <RouterLink :to="{ name: route, params: { id: value._id } }">
          <p>{{ value.name }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  &__suggestions {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
