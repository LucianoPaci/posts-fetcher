import { useEffect, useState } from 'react'

export default function useAsyncFetch(url, options = { method: 'GET' }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
        }
        let parsedData = await response.json()
        setData(parsedData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [url])

  return { data, error, loading }
}
