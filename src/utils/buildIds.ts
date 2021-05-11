import { IdType } from '../types'

const buildIds = (ids?: Array<IdType> | IdType): string => {
  if (!ids) return ''
  if (!Array.isArray(ids)) return String(ids)

  return ids.join(',')
}

export default buildIds
