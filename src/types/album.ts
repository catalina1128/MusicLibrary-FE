import type { Song } from '@/types/song.ts'

export type Album = {
  title: string
  description: string
  songs: Song[]
}
