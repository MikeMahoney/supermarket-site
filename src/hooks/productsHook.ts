import { type ProductDTO, fetchProducts } from 'api/productsApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TProductHook = {
  productList: ProductDTO[]
  isProductListLoading: boolean
}

// Get the list of missions
export const getProductList = (): TProductHook => {
  const [productList, setProductList] = useState<ProductDTO[]>([])
  const [isProductListLoading, setIsProductListLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        if (data != null) {
          setProductList(data)
        }
        setIsProductListLoading(false)
      })
      .catch(function () {
        toast.error('Error: Fetching products')
        setIsProductListLoading(false)
      })
  }, [])

  return {
    productList,
    isProductListLoading
  }
}
