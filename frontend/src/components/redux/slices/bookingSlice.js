import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  booking: [],
  loading: false,
  error: null
};

export const fetchBooking = createAsyncThunk(
  '/fetchBooking',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/bookings`,{
          headers: {
        Authorization: `Bearer ${token}`
      }
        }
      );

     
      return data.data.booking;
    } catch (error) {
      rejectWithValue(error.data.message);
    }
  }
);



  const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(fetchBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
    
// console.log(action.payload)
        state.loading = false;
        state.booking = action.payload;
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.error = action.payload;
      })
  
    },
});

export default bookingSlice.reducer;