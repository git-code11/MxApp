import { configureStore } from '@reduxjs/toolkit'

//import reducers
import loaderStatus from "./loader_status";
import notifyStatus from "./notify_status";
import exchange from "./exchange";
import user from "./user";


export default configureStore({
  reducer: {loaderStatus, notifyStatus, exchange, user},
})