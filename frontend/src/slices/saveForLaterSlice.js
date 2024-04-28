import { addToCart } from './cartSlice'; 
import { createSlice } from '@reduxjs/toolkit';

export const saveForLaterSlice = createSlice({
  name: 'saveForLater',
  initialState: {
    savedItems: [],
  },
  reducers: {
    saveItem: (state, action) => {
      const existingIndex = state.savedItems.findIndex(
        item => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.savedItems[existingIndex].qty += action.payload.qty;
      } else {
        state.savedItems.push(action.payload);
      }
    },
    removeSavedItem: (state, action) => {
      state.savedItems = state.savedItems.filter(
        item => item._id !== action.payload
      );
    },
  },
});

export const moveToCart = (item) => (dispatch) => {
  dispatch(addToCart(item));  
  dispatch(removeSavedItem(item._id)); 
};

export const { saveItem, removeSavedItem } = saveForLaterSlice.actions;
export default saveForLaterSlice.reducer;