import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./updateActions";

const initialState = {
  error: null,
  loading: false,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      //state.error = action.error.message;
    });
  },
});

export default updateSlice.reducer;