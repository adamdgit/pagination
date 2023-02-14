import { useEffect, useState } from "react"
import Pagination from "./components/pagination"
import Products from "./components/products"

function App() {

  const [items] = useState(30)
  const [products, setProducts] = useState([])
  // pagination
  const [itemsPerPage] = useState(9)
  const [page, setPage] = useState(0)

  async function fetchData() {
    const res = await fetch(`https://dummyjson.com/products?limit=${items}`)
    const data = await res.json()

    if(!data) return console.error('no data returned')
    if(data.products.length === 0) return
    console.log(data)
    setProducts(data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Products</h1>
      {
        products.length > 0 &&
        <>
        <Products 
          products={products} 
          itemsPerPage={itemsPerPage}
          page={page}
        />
        <Pagination
          products={products} 
          setPage={setPage}
          itemsPerPage={itemsPerPage}
        />
        </>
      }
    </div>
  )
}

export default App
