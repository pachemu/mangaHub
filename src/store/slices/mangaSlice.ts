import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMangaList } from '../../interfaces/interfaces';

// Define a type for the slice state
export interface MangaState {
  manga: IMangaList[];
}

const initialState: MangaState = {
  manga: [],
};

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    getManga: (state, action: PayloadAction<IMangaList[]>) => {
      state.manga = action.payload;
    },
  },
});

export const { getManga } = mangaSlice.actions;
export default mangaSlice.reducer;
