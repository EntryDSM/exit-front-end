import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
