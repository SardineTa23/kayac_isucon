import { RowDataPacket } from 'mysql2/promise'

export type UserRow = RowDataPacket & {
  account: string
  password_hash: string
  display_name: string
  is_ban: boolean
  created_at: Date
  last_logined_at: Date
}

export type SongRow = RowDataPacket & {
  id: number
  ulid: string
  title: string
  artist_id: number
  album: string
  track_number: number
  is_public: boolean
  artist_name: string
}

export type ArtistRow = RowDataPacket & {
  id: number
  ulid: string
  name: string
}

export type PlaylistRow = RowDataPacket & {
  id: number
  ulid: string
  name: string
  user_account: string
  is_public: boolean
  created_at: Date
  updated_at: Date
}

export type PlaylistSongRow = RowDataPacket& {
  playlist_id: number
  sort_order: number
  song_id: number
}

export type PlaylistFavoriteRow = RowDataPacket & {
  id: number
  playlist_id: number
  favorite_user_account: string
  created_at: Date
}

export type PlaylistWithUser = RowDataPacket & {
  id: number
  ulid: string
  name: string
  user_account: string
  is_public: boolean
  created_at: Date
  updated_at: Date
  user_display_name: string
}

export type PlaylistWithUserAndFavoriteCount = RowDataPacket & {
  id: number
  ulid: string
  name: string
  user_account: string
  is_public: boolean
  created_at: Date
  updated_at: Date
  // UserRow
  display_name: string
  // Favorite count
  favorite_count: number
}
