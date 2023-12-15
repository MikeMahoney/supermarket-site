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
    addToBasket: (state, action: PayloadAction<ProductDTO>) => ({
      ...state,
      productList: [...state.productList, action.payload]
    }),
    removeFromBasket: (state, action) => ({
      ...state,
      productList: state.productList.filter((product) => product.id !== action.payload.id)
    })
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer
