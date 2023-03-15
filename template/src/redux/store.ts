import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import * as thunkMiddleware from 'redux-thunk';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

import rootReducer from './reducers';
let middlewares = [thunkMiddleware.default];

if (__DEV__) {
  const logger = require('redux-logger');

  const loggerMiddleware = logger.createLogger({
    duration: true,
  });

  middlewares = [...middlewares, loggerMiddleware];
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export const useAppDispatch: () => TypedDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
