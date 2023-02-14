import { useState } from "react"

export default function Pagination({ products, setPage, itemsPerPage }) {

  const [selectedPage, setSelectedPage] = useState(1)

  function paginationHandler(e) {
    // convert to index by -1 from clicked number
    setPage(Number(e) -1)
    setSelectedPage(Number(e))
  }

  return (
    <div className="pagination">
      <button className="pag-btn">◀ Prev</button>
      {
        [...Array(Math.ceil(products.length / itemsPerPage))].map((a, index) => {
          return <button 
            style={selectedPage === index +1 ? {background: 'white', border: '1px solid #2b87e2'} : {}}
            key={index} 
            onClick={(e) => paginationHandler(e.target.innerText)}
            className="pag-btn">
              {index +1}
          </button>
        })
      }
      <button className="pag-btn">Next ▶</button>
    </div>
  )
}