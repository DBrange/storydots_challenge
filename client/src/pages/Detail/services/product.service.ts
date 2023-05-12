import Cookies from "js-cookie";
import { FormValuesForm, Product } from "../../../models";
import { UserKey } from "../../../redux/slices/userSlice";

export const BaseUrl = 'http://localhost:8000/api/product/'

export async function getProduct(url: string): Promise<Product> {
  return fetch(url).then((res) => res.json());
}

export const DeleteProductUrl = BaseUrl + "delete";

const token = Cookies.get(UserKey) as string;

export async function deleteProduct(
  url: string) {
  return fetch(url, {
    method: "DELETE",
    // body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      storydots_token: token,
    },
  });
}
