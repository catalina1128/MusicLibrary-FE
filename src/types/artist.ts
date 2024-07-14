import type { Album } from '@/types/album.ts'

export type Artist = {
  _id?: string
  name: string
  albums: Album[]
}
