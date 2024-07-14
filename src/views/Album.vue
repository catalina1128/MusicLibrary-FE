<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import AlbumCard from '@/components/albums/AlbumCard.vue'
import { getAlbumByArtistAndName } from '@/repositories/albums/index.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
const album = ref(null)

const getAlbum = async () => {
  const response = await getAlbumByArtistAndName(route.params.artistId, route.params.albumTitle)

  if (response) {
    album.value = response
  }
}

onBeforeMount(getAlbum)
</script>

<template>
  <div class="box">
    <h1>Enjoy your favourite songs</h1>
    <AlbumCard v-if="album" :album="album" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
}
</style>
