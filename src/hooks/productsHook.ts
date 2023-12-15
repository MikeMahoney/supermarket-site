import { type ProductDTO, fetchProducts } from 'api/productsApi'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TProductHook = {
  productList: ProductDTO[]
  isProductListLoading: boolean
}

// Get the list of products
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
      .catch((error) => {
        if (error instanceof AxiosError) {
          toast.error(`Error: ${error.message}`)
        } else {
          toast.error('Error: Fetching products')
        }
        setIsProductListLoading(false)
      })
  }, [])

  return {
    productList,
    isProductListLoading
  }
}
