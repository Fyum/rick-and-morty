import { API_BASE_URL } from '../const'
import { QueryObjectType, PaginatedResults, Character, Episode, IdType, Location } from '../types'
import buildIds from '../utils/buildIds'
import buildQueryParams from '../utils/buildQueryParams'

const buildUrl = (
  url: string,
  queryObject?: QueryObjectType,
  ids?: Array<IdType> | IdType,
) => {
  return `${API_BASE_URL}${url}/${buildIds(ids)}${buildQueryParams(queryObject)}`
}

export const getCharacters = async (
  queryObject: QueryObjectType,
): Promise<PaginatedResults<Character>> => {
  const url = buildUrl('/character', queryObject)
  return fetch(url).then((res) => res.json())
}

export const getEpisodes = async (
  queryObject: QueryObjectType,
): Promise<PaginatedResults<Episode>> => {
  const url = buildUrl('/episode', queryObject)
  return fetch(url).then((res) => res.json())
}

export const getEpisodeById = async (ids: Array<IdType> | IdType) => {
  const url = buildUrl('/episode', undefined, ids)
  return fetch(url).then((res) => res.json())
}

export const getLocations = async (
  queryObject: QueryObjectType,
): Promise<PaginatedResults<Location>> => {
  const url = buildUrl('/location', queryObject)
  return fetch(url).then((res) => res.json())
}

export const getLocationById = async (
  ids: Array<IdType> | IdType,
): Promise<Location | undefined> => {
  const url = buildUrl('/location', undefined, ids)
  return fetch(url).then((res) => res.json())
}
