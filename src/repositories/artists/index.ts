import { config } from '@/config'
import type { Artist } from '@/types/artist.ts'

const apiUrl = config.apiUrl
const getArtists = async () => {
  const { success, data } = await fetch(`${apiUrl}/artists`).then((response) => {
    return response.json()
  })

  if (!success) {
    return
  }

  return data
}

const getArtistById = async (id: string) => {
  const { success, data } = await fetch(`${apiUrl}/artists/${id}`).then((response) => {
    return response.json()
  })

  if (!success) {
    return
  }

  return data
}

const getArtistsSearch = async (name: string) => {
  const { success, data } = await fetch(`${apiUrl}/artists/${name}/suggestions`).then(
    (response) => {
      return response.json()
    }
  )

  if (!success) {
    return
  }

  return data
}

const deleteArtist = async (id: string) => {
  return await fetch(`${apiUrl}/artists/${id}`, { method: 'DELETE' }).then((response) => {
    return response.json()
  })
}

const addArtist = async (artist: Artist) => {
  await fetch(`${apiUrl}/artists`, {
    method: 'POST',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json()
  })
}

const updateArtist = async (id: string, artist: Artist) => {
  await fetch(`${apiUrl}/artists/${id}`, {
    method: 'PUT',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json()
  })
}

export { getArtists, getArtistsSearch, deleteArtist, addArtist, updateArtist, getArtistById }
