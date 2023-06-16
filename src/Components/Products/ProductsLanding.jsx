import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utils/ApiUtils';

const ProductsLanding = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const apiResponse = await getProducts();
    setProducts(apiResponse.data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>

      {products.length > 0 && products.map(product => (
        <div className='mb-3'>
          <div className="fs-3">{product.name}</div>
          <div className="fs-4">{product.description}</div>
          <div className="fs-4">{product.price}</div>
        </div>
      ))}
    </div>
  )
}

export default ProductsLanding