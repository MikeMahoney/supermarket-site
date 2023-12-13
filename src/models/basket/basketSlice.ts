import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ProductDTO } from 'api/productsApi'

interface BasketState {
  productList: ProductDTO[]
}

const initialState: BasketState = {
  productList: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductDTO>) => {
      const product: ProductDTO = action.payload
      state.productList.push(product)
    },
    removeFromBasket: (state, action) => {
      console.log(action)
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer
