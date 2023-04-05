import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./rootReducer";
import logger from "./middleware/logger";
import api from "./middleware/api";

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: reducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [],
            },
        }),
        logger({ destination: "Logging" }),
        api,
    ],
});

// export const persistor = persistStore(store);

export default store;
