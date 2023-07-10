import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import userSlice from './UserSlice';
import countSlice from './CountSlice';

const reducers = combineReducers({
  user: userSlice,
  count: countSlice
});

const ROOT_KEY = 'root';

/** The configuration for redux-persist.
 * Add slice name wanna be storage in whitelist
 */
const persistConfig = {
  key: ROOT_KEY,
  version: 1,
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

/* Creating a store with the persisted reducer. */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
