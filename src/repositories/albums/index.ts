import { config } from '@/config'

const apiUrl = config.apiUrl
const getAlbumByArtistAndName = async (artistId: string, albumTitle: string) => {
  const response = await fetch(`${apiUrl}/artists/${artistId}/albums/${albumTitle}`)

  return await response.json()
}

export { getAlbumByArtistAndName }
