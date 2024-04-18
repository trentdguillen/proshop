import { createSlice } from '@reduxjs/toolkit';

export const saveForLaterSlice = createSlice({
    name: 'saveForLater',
    initialState: {
      savedItems: [],
    },
    reducers: {
        saveItem: (state, action) => {
            const Index = state.savedItems.findIndex(
                item => item._id === action.payload._id
            );
            if (Index >= 0) {
                state.savedItems[Index].qty += action.payload.qty;
            } else {
                state.savedItems.push(action.payload);
            }
        },
    }
});
export const { saveItem } = saveForLaterSlice.actions;
export default saveForLaterSlice.reducer;
