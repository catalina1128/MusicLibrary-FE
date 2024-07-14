<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArtistById } from '@/repositories/artists/index'
import { addArtist, updateArtist } from '@/repositories/artists/index'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import type { Artist } from '@/types/artist.ts'
import type { Ref } from 'vue'

const route = useRoute()
const router = useRouter()

const artist: Ref<Artist> = ref({
  _id: '',
  name: '',
  albums: [
    {
      title: '',
      songs: [
        {
          title: '',
          length: 0
        }
      ],
      description: ''
    }
  ]
})

const isEdit = computed(() => route.name === 'edit-artist')
const artistId = computed(() => route.params.artistId?.toString())

const getArtist = async () => {
  if (artistId.value) {
    const response = await getArtistById(artistId.value)

    artist.value = response[0]
  }
}

const save = async () => {
  if (isEdit.value) {
    updateArtist(artist.value._id, artist.value)
    router.push({ path: '/artists' })

    return
  }

  addArtist(artist.value)
  router.push({ path: '/artists' })
}

onBeforeMount(getArtist)
</script>

<template>
  <div class="artist">
    <div class="artist__name">
      Artist name
      <TextField v-model="artist.name" />
    </div>
    <div class="artist__details">
      <div
        v-for="(album, albumIndex) in artist.albums"
        :key="album.title"
        class="artist__details__albums"
      >
        <div class="artist__details__albums__title">
          Album title
          <TextField v-model="album.title" />
        </div>

        <div class="artist__details__albums__description">
          Album descrtiption
          <TextField v-model="album.description" />
        </div>

        <div v-for="(song, songIndex) in album.songs" :key="song.title">
          <div class="artist__details__albums__songs">
            Song title
            <TextField v-model="song.title" />
            <Button
              tertiary
              v-if="songIndex === album.songs.length - 1"
              @click="album.songs.push({ title: '', length: 0 })"
              text="+"
            />
          </div>
        </div>

        <Button
          tertiary
          v-if="albumIndex === artist.albums.length - 1"
          @click="
            artist.albums.push({
              title: '',
              songs: [{ title: '', length: 0 }],
              description: ''
            })
          "
          text="Add album"
        />
      </div>
    </div>
    <div class="artist__actions">
      <Button primary @click="save" text="Save" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.artist {
  display: grid;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;

  &__name {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
  }

  &__details {
    margin-top: 1rem;
    font-size: 1.2rem;

    &__albums {
      margin-top: 1rem;
      font-size: 1.2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 1rem;

      &__description {
        display: flex;
        margin: 1rem;
        justify-content: space-evenly;
      }

      &__title {
        display: flex;
        margin: 1rem;
        justify-content: space-evenly;
      }

      &__songs {
        display: flex;
        margin-top: 1rem;
        font-size: 1.2rem;
        justify-content: space-evenly;
      }
    }
  }

  &__actions {
    margin-top: 1rem;
    justify-self: center;
  }
}
</style>
