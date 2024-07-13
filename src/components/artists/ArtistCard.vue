<script setup lang="ts">
import Card from '@/components/Card.vue'

const props = defineProps<{
  artist: {
    name: string
    albums: {
      title: string
      songs: {
        title: string
        length: string
      }
      description: string
    }
  }
}>()
</script>

<template>
  <div class="artist">
    <Card class="card">
      <template v-slot:default>
        <div class="artist__name">
          {{ artist.name }}
        </div>
      </template>
      <template v-slot:details>
        <div class="artist__details">
          <div class="artists__details__title">Albums released by {{ artist.name }}</div>
          <div v-for="album in artist.albums" :key="album.title">
            <div class="artist__details__album">
              {{ album.title }}
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.artist {
  display: grid;

  &__name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__details {
    margin-top: 1rem;
    font-size: 1.2rem;

    &__title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    &__album {
      margin-top: 1rem;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
}
</style>
