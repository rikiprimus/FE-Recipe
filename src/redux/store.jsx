import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducers from "./reducer"
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage
}

const persistedReducer = persistReducer(persistConfig,rootReducers)

export let store = createStore(
	persistedReducer,
	applyMiddleware(thunk,logger)
)
export let persistor = persistStore(store)