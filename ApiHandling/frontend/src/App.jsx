import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [search, setSearch] = useState("")
  const {products,error, loading } = customReactQuery(`/api/products?search=${search}`)


  if (error) {
    return <h1>Something went wrong</h1>
  }
  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>API Handling</h1>

      <input type="text" placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}

      />
      <h2>Number of Products are {products.length}</h2>
    </>
  )
}

export default App


const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    ; (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath)
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [])

  return {
    products,
    error,
    loading
  }
}
