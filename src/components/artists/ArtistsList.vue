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
const isLoading = ref(true)

const getArtistsList = async () => {
  isLoading.value = true
  const response = await getArtists()

  if (response) {
    artists.value = response
  }

  isLoading.value = false
}

onMounted(getArtistsList)

const deleteAction = async (artistId: string) => {
  const { success } = await deleteArtist(artistId)

  if (success) {
    getArtistsList()
  }
}
</script>

<template>
  <div class="artists-list">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="!artists.length">No artists found</div>
    <ArtistCard
      v-else
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
