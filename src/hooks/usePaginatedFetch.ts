import { useEffect, useState, useCallback } from 'react'
import { PaginatedResults } from '../types'

interface Pagination {
  pages: number
  count: number
  hasMore: boolean
}

function usePaginatedFetch<T>(
  requestFn: ({ page }: { page: number }) => Promise<PaginatedResults<T>>,
): [
  Array<T> | undefined,
  boolean,
  unknown,
  Pagination,
  (params: Parameters<typeof requestFn>[0]) => Promise<void>,
] {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<PaginatedResults<T>['results']>([])
  const [error, setError] = useState<unknown>(null)
  const [pagination, setPagintation] = useState<Pagination>({
    pages: 0,
    count: 0,
    hasMore: false,
  })

  const makeRequest = useCallback(
    async (params = { page: 1 }) => {
      setLoading(true)
      requestFn(params)
        .then((result) => {
          const { results, info } = result
          const { count, pages, next } = info
          setPagintation({ count, pages, hasMore: Boolean(next) })
          const newData = data.length ? [...data, ...results] : [...results]
          setData(newData)
        })
        .catch(setError)
        .finally(() => setLoading(false))
    },
    [data, requestFn],
  )

  useEffect(() => {
    if (!loading) {
      makeRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading, error, pagination, makeRequest]
}

export default usePaginatedFetch
