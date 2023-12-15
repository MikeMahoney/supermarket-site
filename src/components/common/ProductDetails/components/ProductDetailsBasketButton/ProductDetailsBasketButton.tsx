import React from 'react'
import './ProductDetailsBasketButtonStyles.scss'
import { BasketIcon } from 'components/common/Icons/BasketIcon/BasketIcon'

interface IProductDetailsBasketButton {
  productInBasket: boolean
  onClick: () => void
}

const ProductDetailsBasketButton: React.FC<IProductDetailsBasketButton> = ({
  productInBasket,
  onClick
}) => {
  return (
    <button
      className={`product-details-basket-button ${
        productInBasket ? 'product-details-basket-button--added' : ''
      }`}
      onClick={onClick}
      data-testid='product-basket-button'
    >
      {productInBasket ? 'Remove' : 'Add To Basket'}
      <BasketIcon />
    </button>
  )
}

export default ProductDetailsBasketButton
