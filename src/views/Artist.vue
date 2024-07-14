<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import ArtistCard from '@/components/artists/ArtistCard.vue'
import { getArtistById } from '@/repositories/artists/index.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
const artist = ref(null)

const getArtist = async () => {
  const response = await getArtistById(route.params.id)

  if (response) {
    artist.value = response[0]
  }
}

onMounted(getArtist)
</script>

<template>
  <div class="box">
    <h1>Enjoy your favourite artist</h1>
    <ArtistCard v-if="artist" :artist="artist" :admin="false" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
}
</style>
