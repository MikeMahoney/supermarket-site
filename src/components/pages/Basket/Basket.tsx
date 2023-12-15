import ProductList from 'components/common/ProductList/ProductList'
import { useAppSelector } from 'hooks'
import React from 'react'

const Basket: React.FC = () => {
  const productList = useAppSelector((state) => state.basket.productList)

  return (
    <div className='basket'>
      <h2>{'Basket'}</h2>
      {productList.length > 0 ? (
        <ProductList productList={productList} />
      ) : (
        'No products added to basket'
      )}
    </div>
  )
}

export default Basket
