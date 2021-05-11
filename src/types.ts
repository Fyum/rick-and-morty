export type Nullable<T> = T | null
export type UrlString = string
export type IdType = string | number
export type Optional<T> = T | undefined

export interface PaginatedResults<T> {
  info: {
    count: number
    pages: number
    next: Nullable<UrlString>
    prev: Nullable<UrlString>
  }
  results: Array<T>
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: UrlString
  }
  location: {
    name: string
    url: UrlString
  }
  image: UrlString
  episode: Array<UrlString>
  url: UrlString
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: Array<UrlString>
  url: UrlString
  created: string
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Array<UrlString>
  created: string
}

export interface QueryObjectType {
  page?: number
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}

export type ViewType = 'character' | 'location' | 'episodes' | 'origin'
