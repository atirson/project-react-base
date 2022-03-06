import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import getThunkStatus from '@core/helpers/getThunkStatus';
import { RootState } from '@core/store';

interface MathState {
  value: number;
  fetching: boolean;
}

const initialState: MathState = {
  value: 0,
  fetching: false,
};

export const sum = createAsyncThunk(
  'math/sum',
  async (numberAdd: number, { getState, dispatch, rejectWithValue }) => {
    try {
      const result = (getState() as RootState).math.value + numberAdd;
      await dispatch(sumNumber(result));
    } catch (err: any) {
      return rejectWithValue({ ...err });
    }
  },
);

export const sub = createAsyncThunk(
  'math/sub',
  async (numberSub: number, { getState, dispatch, rejectWithValue }) => {
    try {
      const result = (getState() as RootState).math.value - numberSub;
      await dispatch(subNumber(result));
    } catch (err: any) {
      return rejectWithValue({ ...err });
    }
  },
);

const mathSlice = createSlice({
  initialState,
  name: 'math',
  reducers: {
    sumNumber(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    subNumber(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setFetching(state, action: PayloadAction<boolean>) {
      state.fetching = action.payload;
    },
  },
  extraReducers(builder) {
    const { error, loading, success } = getThunkStatus([
      sum,
      sub,
    ]);

    builder
      .addMatcher(error, (state) => {
        state.fetching = false;
      })
      .addMatcher(success, (state) => {
        state.fetching = false;
      })
      .addMatcher(loading, (state) => {
        state.fetching = true;
      });
  },
});

export const {
  sumNumber,
  setFetching,
  subNumber,
} = mathSlice.actions;

const MathReducer = mathSlice.reducer;
export default MathReducer;
