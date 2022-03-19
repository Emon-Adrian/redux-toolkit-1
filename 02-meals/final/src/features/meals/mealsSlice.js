import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  meals: [],
  loading: true,
  error: false,
};

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (name, { rejectWithValue }) => {
    try {
      const resp = await axios(
        `https://themealdb.com/api/json/v1/1/search.php?s=${name || 'b'}`
      );
      // console.log(resp);
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      return rejectWithValue('There was an error...');
    }
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: {
    [getMeals.pending]: (state) => {
      state.loading = true;
    },
    [getMeals.fulfilled]: (state, action) => {
      // console.log(action);
      state.loading = false;
      state.meals = action.payload.meals;
    },
    [getMeals.rejected]: (state, action) => {
      // console.log(action);
      state.loading = false;
    },
  },
});

export default mealsSlice.reducer;
