import React from 'react'
import { getProductList } from 'hooks/productsHook'
import { ThreeDots } from 'react-loader-spinner'
import ProductList from 'components/common/ProductList/ProductList'

const Products: React.FC = () => {
  const { productList, isProductListLoading } = getProductList()

  return (
    <div className='products'>
      {isProductListLoading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='black'
          ariaLabel='three-dots-loading'
          visible={true}
        />
      ) : productList.length === 0 ? (
        <h2 className='payload__blank'>{'No products returned'}</h2>
      ) : (
        <ProductList productList={productList} />
      )}
    </div>
  )
}

export default Products
