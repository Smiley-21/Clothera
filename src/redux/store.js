// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartReducer'

// export const store = configureStore({
//   reducer: {cart:cartReducer},
// })
import cartReducer from './cartReducer'
import { configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const stripe = require('stripe')('pk_test_51MqJwTSCQKJFvadA9PC65mwAMm5Ssk5tADwY4I6YdykNaccwJF2WyOOjrMwNHp1ySDoRh8V24wH3EdZrQQXPSVxe00lMrry3qd');




const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

