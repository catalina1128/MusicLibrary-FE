<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import ArtistsList from '@/components/artists/ArtistsList.vue'
import { getArtists } from '@/repositories/artists/index.ts'

const artists = ref([])

const getArtistsList = async () => {
  const response = await getArtists()

  if (response) {
    artists.value = response
  }
}

onBeforeMount(getArtistsList)
</script>

<template>
  <div class="box">
    <ArtistsList :artists="artists" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
}
</style>
