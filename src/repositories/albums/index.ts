import { config } from '@/config'

const apiUrl = config.apiUrl
const getAlbumByArtistAndName = async (artistId: string, albumTitle: string) => {
  const response = await fetch(`${apiUrl}/artists/${artistId}/albums/${albumTitle}`).then(
    (response) => {
      return response.json()
    }
  )

  if (!response.success) {
    return
  }

  return response.data
}

export { getAlbumByArtistAndName }
