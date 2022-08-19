import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAxios(url, options = { method: 'GET' }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const response = await axios(url, options)
        setData(response.data)
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
