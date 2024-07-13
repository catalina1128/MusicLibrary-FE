import { config } from '@/config'

const apiUrl = config.apiUrl
const getArtists = async () => {
  const response = await fetch(`${apiUrl}/artists`)
  console.log(await response)
  return await response.json()
}

export { getArtists }
