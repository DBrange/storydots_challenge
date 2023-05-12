import { configureStore } from "@reduxjs/toolkit"
import { UserInfo } from "../models"
import userSlice from "./slices/userSlice"

export interface AppStore{
  user: UserInfo
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice
  }
})