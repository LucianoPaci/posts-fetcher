import { useEffect, useState } from 'react'
import useFetch from './useFetch'
import useAsyncFetch from './useAsyncFetch'
import useAxios from './useAxios'

import './App.css'
import Feedback from './components/Feedback'
import DisplayError from './components/DisplayError'
import Header from './components/Header'
import ListContainer from './components/ListContainer'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

function App() {
  const [url, setUrl] = useState(BASE_URL)
  /* Option 1
    const { data, error, loading } = useFetch(BASE_URL)
  */
  /*
    const { data, error, loading } = useAxios(BASE_URL)
  */
  const { data, error, loading } = useAsyncFetch(url)
  const [item, setItem] = useState(null)
  const [isPosting, setIsPosting] = useState(false)
  const [limit, setLimit] = useState(10)

  const handleSubmit = (id) => (e) => {
    const foundItem = data.find((item) => item.id === id)
    setItem(foundItem)
  }

  const handlePostItem = async (item) => {
    console.log(`Posting...`)
    setIsPosting(true)
    setTimeout(() => {
      alert(`POSTED! ${JSON.stringify(item)}`)
      setIsPosting(false)
      setItem(null) // clean
    }, 3000)
  }

  useEffect(() => {
    if (item) {
      handlePostItem(item)
    }
  }, [item])

  useEffect(() => {
    setUrl(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
  }, [limit])

  return (
    <>
      <div className="App">
        <Header limit={limit} onSetLimit={setLimit} />
        <div className="title-container">
          <h1>Posts</h1>
        </div>
        <div className="information-container">
          <Feedback status={loading} text={`Loading...`} />
          <Feedback status={isPosting} text={`Posting item ${item?.id}...`} />
          <DisplayError error={error} />
        </div>
        <ListContainer data={data} handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default App
