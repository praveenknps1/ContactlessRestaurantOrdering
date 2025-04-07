import { configureStore } from "@reduxjs/toolkit";
import { CartData } from "./action";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, CartData.reducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
