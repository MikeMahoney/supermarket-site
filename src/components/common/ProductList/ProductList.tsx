import { type ProductDTO } from 'api/productsApi'
import React from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'

interface IProductList {
  productList: ProductDTO[]
}

const ProductList: React.FC<IProductList> = ({ productList }) => {
  return (
    <div className='product-list'>
      {productList.map((product, index) => (
        <ProductDetails key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductList
