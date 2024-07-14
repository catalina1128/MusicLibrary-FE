<script setup lang="ts">
import Card from '@/components/Card.vue'
import type { Album } from '@/types/album.ts'

const props = defineProps<{
  album: Album
}>()
</script>

<template>
  <div class="album">
    <Card class="card" open>
      <template v-slot:default>
        <div class="album__name">
          {{ album.title }}
        </div>
      </template>
      <template v-slot:details>
        <div class="album__details">
          <div v-for="song in album.songs" :key="song.title">
            <div class="album__details__album">{{ song.title }} - {{ song.length }}</div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.album {
  display: grid;

  &__name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__details {
    margin-top: 1rem;
    font-size: 1.2rem;

    &__album {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
}
</style>
