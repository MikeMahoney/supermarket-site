import React from 'react'
import { render, within, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import ProductDetails from './ProductDetails'
import { store } from 'store'
import { Provider } from 'react-redux'

const product = {
  id: 1,
  name: 'Gala Apples (5 lbs)',
  description: 'Crisp and delicious apples for a healthy snack.',
  price: 3.49
}

describe('ProductDetails', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductDetails product={product} />
      </Provider>
    )
  })

  it('should display the product name', () => {
    const { getByText } = within(screen.getByTestId('product-name'))
    expect(getByText(product.name)).toBeInTheDocument()
  })

  it('should display the product description', () => {
    const { getByText } = within(screen.getByTestId('product-description'))
    expect(getByText(product.description)).toBeInTheDocument()
  })

  it('should display the product price', () => {
    const { getByText } = within(screen.getByTestId('product-price'))
    expect(getByText(`£${product.price}`)).toBeInTheDocument()
  })

  it('should update the product to be in basket', () => {
    const addToBasketButton = screen.getByTestId('product-basket-button')
    const { getByText } = within(addToBasketButton)

    fireEvent.click(addToBasketButton)

    expect(addToBasketButton).toHaveClass('product-details-basket-button--added')
    expect(getByText('Remove')).toBeInTheDocument()
  })
})
