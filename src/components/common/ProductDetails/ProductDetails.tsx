import { type ProductDTO } from 'api/productsApi'
import React from 'react'
import './ProductDetailsStyles.scss'
import { BasketIcon } from '../Icons/BasketIcon/BasketIcon'
import { useAppDispatch } from 'hooks'
import { addToBasket } from 'models/basket/basketSlice'

interface IProductDetails {
  product: ProductDTO
}

const ProductDetails: React.FC<IProductDetails> = ({ product }) => {
  const { name, description, price } = product
  const dispatch = useAppDispatch()

  const onClickAddToBasket = (): void => {
    dispatch(addToBasket(product))
  }

  return (
    <div className='product-details'>
      <h3>{name}</h3>
      <div>{description}</div>
      <div>{price}</div>
      <button className='product-details__basket-button' onClick={onClickAddToBasket}>
        {'Add To Basket'}
        <BasketIcon />
      </button>
    </div>
  )
}

export default ProductDetails
