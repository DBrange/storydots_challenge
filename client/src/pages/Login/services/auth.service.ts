import { FormValues } from "../../../models";

export const BaseUrl = "http://localhost:8000/api/auth/";

export const LoginUrl = BaseUrl + "login";
export const UsersUrl = "http://localhost:8000/api/user/all";

export async function loginUser(url: string, { arg }: { arg: FormValues }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getUsers(url: string) {
  return fetch(url).then((res) => res.json());
}
