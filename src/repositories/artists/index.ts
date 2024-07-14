import { config } from '@/config'

const apiUrl = config.apiUrl
const getArtists = async () => {
  const response = await fetch(`${apiUrl}/artists`)

  return await response.json()
}

const getArtistById = async (id: string) => {
  const response = await fetch(`${apiUrl}/artists/${id}`)

  return await response.json()
}

const getArtistsSearch = async (name: string) => {
  const response = await fetch(`${apiUrl}/artists/${name}/suggestions`)

  return await response.json()
}

const deleteArtist = async (id: string) => {
  const response = await fetch(`${apiUrl}/artists/${id}`, { method: 'DELETE' })

  return await response.json()
}

const addArtist = async (artist) => {
  console.log(artist)
  const response = await fetch(`${apiUrl}/artists`, {
    method: 'POST',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
}

const updateArtist = async (id: string, artist) => {
  const response = await fetch(`${apiUrl}/artists/${id}`, {
    method: 'PUT',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
}

export { getArtists, getArtistsSearch, deleteArtist, addArtist, updateArtist, getArtistById }
