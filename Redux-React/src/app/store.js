// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from '../features/authSlice';
// import CategorySlice from '../features/CategorySlice';
// import ProductSlice from '../features/ProductSlice';

// export const store = configureStore({
//   reducer: {
//     product: ProductSlice,
//     category: CategorySlice,
//     auth: authSlice
//   },
// });
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer,
  persistStore, PURGE,
  REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export default persistStore(store);
