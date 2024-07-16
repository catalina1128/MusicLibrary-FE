<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import type { Artist } from '@/types/artist.ts'

const props = defineProps<{
  artist: Artist
  admin: boolean
}>()

const emit = defineEmits(['delete'])
</script>

<template>
  <div class="artist">
    <Card class="card" :open="false">
      <template v-slot:default>
        <div class="artist__name">
          {{ artist.name }}
        </div>
      </template>
      <template v-slot:details>
        <div class="artist__details">
          <div v-for="album in artist.albums" :key="album.title">
            <div class="artist__details__album">
              <RouterLink
                :to="{ name: 'album', params: { artistId: artist._id, albumTitle: album.title } }"
              >
                {{ album.title }}
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
      <template v-if="admin" v-slot:actions>
        <div class="actions">
          <RouterLink :to="{ name: 'edit-artist', params: { artistId: artist._id } }">
            <Button text="Edit" tertiary />
          </RouterLink>
          <Button @click="emit('delete', artist._id)" text="Delete" secondary />
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

    &__album {
      margin-top: 1rem;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
}

.actions {
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
}
</style>
