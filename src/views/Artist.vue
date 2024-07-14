<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ArtistCard from '@/components/artists/ArtistCard.vue'
import { getArtistById } from '@/repositories/artists/index'
import { useRoute } from 'vue-router'

const route = useRoute()
const artist = ref(null)

const artistId = computed(() => route.params.id.toString())

const getArtist = async () => {
  const response = await getArtistById(artistId.value)
  artist.value = response
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
