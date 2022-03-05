import {
  configureStore,
} from '@reduxjs/toolkit';
import MathReducer from './Math/Math.slice';

export const store = configureStore({
  reducer: {
    math: MathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
