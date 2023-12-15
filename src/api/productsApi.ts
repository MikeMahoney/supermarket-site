import axios, { type AxiosResponse } from 'axios'

const API_ROOT = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org'

export type ProductDTO = {
  id: number
  name: string
  description: string
  price: number
}

export const fetchProducts = async (): Promise<ProductDTO[] | undefined> => {
  const response: AxiosResponse = await axios.get(`${API_ROOT}/products.json`)
  const responseData: ProductDTO[] = response.data
  return responseData
}
