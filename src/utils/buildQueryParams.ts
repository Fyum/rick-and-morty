import { QueryObjectType } from '../types'

const buildQueryParams = (queryObject?: QueryObjectType): string => {
  if(!queryObject) return ''
  const query = Object.entries(queryObject)
  if (!query.length) return ''

  const params = query.map(([key, value]) => `${key}=${value}`).join('&')
  return `?${params}`
}

export default buildQueryParams
