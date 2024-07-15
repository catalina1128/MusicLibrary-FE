<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ArtistCard from '@/components/artists/ArtistCard.vue'
import { getArtistById } from '@/repositories/artists/index'
import { useRoute } from 'vue-router'

const route = useRoute()
const artist = ref(null)
const isLoading = ref(true)

const artistId = computed(() => route.params.id.toString())

const getArtist = async () => {
  isLoading.value = true
  const response = await getArtistById(artistId.value)
  console.log(response)
  artist.value = response
  isLoading.value = false
}

onMounted(getArtist)
</script>

<template>
  <div class="box">
    <h1>Enjoy your favourite artist</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="!artist">No artist found</div>
    <ArtistCard v-else :artist="artist" :admin="false" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
}
</style>
