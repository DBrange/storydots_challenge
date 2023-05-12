import Cookies from "js-cookie";
import { FormValuesForm, Product } from "../../../../models";
import { UserKey } from "../../../../redux/slices/userSlice";

export const BaseUrl = "http://localhost:8000/api/product/";
export const UpdateProductUrl = BaseUrl + "edit";

const token = Cookies.get(UserKey) as string;

export async function updateProduct(
  url: string,
  { arg }: { arg: FormValuesForm }
) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      storydots_token: token,
    },
  });
}

export async function getProduct(url: string): Promise<Product> {
  return fetch(url).then((res) => res.json());
}



