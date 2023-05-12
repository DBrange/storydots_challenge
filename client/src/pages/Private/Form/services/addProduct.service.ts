import Cookies from "js-cookie";
import { Brand, FormValuesForm } from "../../../../models";
import { UserKey } from "../../../../redux/slices/userSlice";

export const BaseUrl = "http://localhost:8000/api/product/";
export const CreateProductUrl = BaseUrl + "create-product";

const token = Cookies.get(UserKey) as string;

export async function addProduct(
  url: string,
  { arg }: { arg: FormValuesForm }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      storydots_token: token,
    },
  });
}

export const BrandsUrl = 'http://localhost:8000/api/brand/all';

export async function getBrands(url: string): Promise<Brand[]> {
  return fetch(url).then((res) => res.json());
}
