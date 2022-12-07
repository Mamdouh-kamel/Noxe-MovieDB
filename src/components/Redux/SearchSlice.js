import { createSlice } from "@reduxjs/toolkit";



let initialState = { searchValue: "" };
export let SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setKeyword: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});

export let searchReducer = SearchSlice.reducer;
export let { setKeyword } = SearchSlice.actions;
