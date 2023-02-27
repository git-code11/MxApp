import { configureStore } from '@reduxjs/toolkit'

//import reducers
import loaderStatus from "./loader_status";
import notifyStatus from "./notify_status";
import exchange from "./exchange";

export default configureStore({
  reducer: {loaderStatus, notifyStatus, exchange},
})