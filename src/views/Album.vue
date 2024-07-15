<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'
import AlbumCard from '@/components/albums/AlbumCard.vue'
import { getAlbumByArtistAndName } from '@/repositories/albums/index'
import { useRoute } from 'vue-router'

const route = useRoute()
const album = ref(null)
const isLoading = ref(true)
const artistId = computed(() => route.params.artistId?.toString())
const albumTitle = computed(() => route.params.albumTitle?.toString())

const getAlbum = async () => {
  isLoading.value = true
  const response = await getAlbumByArtistAndName(artistId.value, albumTitle.value)

  if (response) {
    album.value = response
  }

  isLoading.value = false
}

onBeforeMount(getAlbum)
</script>

<template>
  <div class="box">
    <h1>Enjoy your favourite songs</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="!album">No album found</div>
    <AlbumCard v-else :album="album" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
}
</style>
