import ProductList from 'components/common/ProductList/ProductList'
import { useAppSelector } from 'hooks'
import React from 'react'

const Basket: React.FC = () => {
  const productList = useAppSelector((state) => state.basket.productList)

  return (
    <div className='basket'>
      <ProductList productList={productList} />
    </div>
  )
}

export default Basket
