<script setup lang="ts">
import ArtistsList from '@/components/artists/ArtistsList.vue'
</script>

<template>
  <div class="box">
    <h1>Enjoy your artists</h1>
    <ArtistsList :admin="false" />
  </div>
</template>

<style scoped>
.box {
  align-content: center;
  padding: 20px;
  margin: 1rem;
}
</style>
