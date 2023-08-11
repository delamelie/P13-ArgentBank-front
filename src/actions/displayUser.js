import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../api/api";

// export const displayUser = createAsyncThunk(
//   "user/displayUser",

//   async (arg, { getState }) => {
//     const state = getState();
//     const token = state.auth.token;

//     const headers = {
//       headers: { Authorization: `Bearer ${token}` },
//     };

//     try {
//       const request = await axios.post(PROFILE_URL, {}, headers);
//       const response = request.data;
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.log(error.message);
//       throw error;
//     }
//   }
// );

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async (arg, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const request = await axios.post(PROFILE_URL, {}, headers);
    const response = request.data;
    console.log(response);
    return response;
  }
);