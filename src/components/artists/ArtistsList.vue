<script setup lang="ts">
import ArtistCard from "@/components/artists/ArtistCard.vue"

const props = defineProps<{
    artists: {
        name: string
        albums: {
            title: string
            songs: {
                title: string
                length: string
            }
            description: string
        }
    }
}>()

</script>

<template>
    <div class="artists-list">
        <ArtistCard v-for="artist in artists" :key="artist.name" :artist="artist" />
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