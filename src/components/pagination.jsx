import { useState } from "react"

export default function Pagination({ products, setPage, itemsPerPage }) {

  const [selectedPage, setSelectedPage] = useState(1)

  function paginationHandler(e) {
    // convert to index by -1 from clicked number
    setPage(Number(e) -1)
    setSelectedPage(Number(e))
  }

  function previousPage() {
    if (selectedPage === 1) return
    setPage(selectedPage -2) // must be converted to index so -1 then also -1 for going back a page
    setSelectedPage(selectedPage -1)
  }

  function nextPage() {
    if (selectedPage === Math.ceil(products.length / itemsPerPage)) return
    setPage(selectedPage) // don't increase because this is an index (start at 0)
    setSelectedPage(selectedPage +1)
  }

  return (
    <div className="pagination">
      <button className="pag-btn" onClick={() => previousPage()}>◀ Prev</button>
      {
        [...Array(Math.ceil(products.length / itemsPerPage))].map((a, index) => 
          <button 
            style={selectedPage === index +1 ? {background: 'white', border: '1px solid #2b87e2'} : {}}
            key={index} 
            onClick={(e) => paginationHandler(e.target.innerText)}
            className="pag-btn">
              {index +1}
          </button>
        )
      }
      <button className="pag-btn" onClick={() => nextPage()}>Next ▶</button>
    </div>
  )
}