import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './models/basket/basketSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}

const persistedBasketReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
  reducer: {
    basket: persistedBasketReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
