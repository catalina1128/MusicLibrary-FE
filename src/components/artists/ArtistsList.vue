<script setup lang="ts">
import ArtistCard from '@/components/artists/ArtistCard.vue'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { getArtists, deleteArtist } from '@/repositories/artists/index'
import Button from '@/components/Button.vue'
import type { Artist } from '@/types/artist.ts'

const props = defineProps<{
  admin: boolean
}>()
const artists: Ref<Artist[]> = ref([])

const getArtistsList = async () => {
  const response = await getArtists()

  if (response) {
    artists.value = response
  }
}

onMounted(getArtistsList)

const deleteAction = async (artistId: string) => {
  const response = await deleteArtist(artistId)

  if (response.success) {
    getArtistsList()
  }
}
</script>

<template>
  <div class="artists-list">
    <ArtistCard
      v-for="artist in artists"
      :key="artist.name"
      :artist="artist"
      :admin="props.admin"
      @delete="deleteAction($event)"
    />
    <RouterLink v-if="admin" :to="{ name: 'add-artist' }">
      <Button text="Add" primary />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.artists-list {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
</style>
