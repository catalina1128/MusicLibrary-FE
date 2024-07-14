<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import Button from '@/components/Button.vue'
import { getArtistsSearch } from '@/repositories/artists/index.ts'
</script>

<template>
  <main>
    <div class="home">
      <div class="home__title">
        <h1>Music Library</h1>
        <h2>Search for your favourite artist</h2>
      </div>
      <div class="home__search">
        <SearchBar :search-function="getArtistsSearch" route="artist-info" />
      </div>
      <div class="home__button">
        <RouterLink to="/artists">
          <Button text="Go to all artists" tertiary />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
