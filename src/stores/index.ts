import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import uploadEligibility from "@/stores/reducer/eligibilityReducer";

// configuration persist
const persistConfig = {
  key: "root",
  storage,
};

// combine reducers
const reducerList = combineReducers({
eligibility:uploadEligibility,
});

const persistedReducer = persistReducer(persistConfig, reducerList);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
