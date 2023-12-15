import { type ProductDTO } from 'api/productsApi'
import React from 'react'
import './ProductDetailsStyles.scss'
import { useAppDispatch, useAppSelector } from 'hooks'
import { addToBasket, removeFromBasket } from 'models/basket/basketSlice'
import ProductDetailsBasketButton from './components/ProductDetailsBasketButton/ProductDetailsBasketButton'

interface IProductDetails {
  product: ProductDTO
}

const ProductDetails: React.FC<IProductDetails> = ({ product }) => {
  const { name, description, price } = product
  const dispatch = useAppDispatch()
  const basketProductList = useAppSelector((state) => state.basket.productList)
  const productInBasket: boolean = basketProductList.some(
    (basketProduct) => basketProduct.id === product.id
  )

  const onClickAddToBasket = (): void => {
    if (productInBasket) {
      dispatch(removeFromBasket(product))
    } else {
      dispatch(addToBasket(product))
    }
  }

  return (
    <div className='product-details'>
      <header>
        <h3 data-testid='product-name'>{name}</h3>
      </header>
      <section className='product-details__content'>
        <div className='product-details__content__description' data-testid='product-description'>
          {description}
        </div>
        <div className='product-details__content__price'>
          <div data-testid='product-price'>{`£${price}`}</div>
          <ProductDetailsBasketButton
            onClick={onClickAddToBasket}
            productInBasket={productInBasket}
          />
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
