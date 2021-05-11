import { useEffect, useState, useCallback } from 'react'
import { QueryObjectType } from '../types'

function useFetch<T>(
  requestFn: (queryObject: QueryObjectType) => Promise<T>,
): [T | undefined, boolean, unknown] {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T>()
  const [error, setError] = useState(null)

  const makeRequest = useCallback(
    async (params = {}) => {
      setLoading(true)
      requestFn(params)
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))
    },
    [requestFn],
  )

  useEffect(() => {
    if (!loading) {
      makeRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading, error]
}

export default useFetch
