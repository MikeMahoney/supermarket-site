import axios, { AxiosError, type AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

const API_ROOT = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org'

export type ProductDTO = {
  id: number
  name: string
  description: string
  price: number
}

export const fetchProducts = async (): Promise<ProductDTO[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_ROOT}/products.json`)

    const responseData: ProductDTO[] = response.data

    return responseData
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(`Error: ${error.message}`)
    } else {
      toast.error('Error: Fetching products')
    }
  }
}
