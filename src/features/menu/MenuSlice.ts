import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    currentMenu: 'groupware',
  },
  reducers: {
    setMenu: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
