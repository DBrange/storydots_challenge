import { Product } from "../../../models";

export const BaseUrl = "http://localhost:8000/api/product";
export const AllProductsUrl = BaseUrl + '/all'
export const AllProductsByNameUrl = BaseUrl + '?name='

export async function getProducts(url: string): Promise<Product[]> {
  return fetch(url).then((res) => res.json());
}

export async function getProductsByName(url: string): Promise<Product[]> {
  return fetch(url).then((res) => res.json());
}
