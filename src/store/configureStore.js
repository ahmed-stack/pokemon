import { configureStore } from "@reduxjs/toolkit";

// Local Imports
import { reducer as appReducer } from "store/reducers/appReducer";
import { reducer as pokemonReducer } from "store/reducers/pokemonReducer";

export default function initializeStore(preloadedState = undefined) {
  return configureStore({
    reducer: {
      app: appReducer,
      pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
}
