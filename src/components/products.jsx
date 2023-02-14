

export default function Products({ products, itemsPerPage, page }) {

  console.log(products)
  return (
    <div className="products-wrap">
      {
        products.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map(product => 
          <div key={product.id} className="product">
            <span className="prod-name">{product.title}</span>
            <span className="prod-brand">{product.brand}</span>
            <img src={product.thumbnail} alt={product.title + ' thumbnail'} height="300px" width="300px" />
            <span className="prod-price">Price: ${product.price}</span>
          </div>
        )
      }
    </div>
  )
}