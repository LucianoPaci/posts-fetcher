import { useEffect, useState } from 'react'

export default function useFetch(url, options = { method: 'GET' }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
        }
        return response.json()
      })
      .then((actualData) => setData(actualData))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [url])

  return { data, error, loading }
}
