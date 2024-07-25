import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import mangaReducer, { MangaState } from './slices/mangaSlice';
import { mangaApi } from './services/mangaApi';

// Configure the Redux store with manga reducer
export const store: EnhancedStore<{
  manga: MangaState;
  mangaApi: ReturnType<typeof mangaApi.reducer>;
}> = configureStore({
  reducer: {
    manga: mangaReducer,
    [mangaApi.reducerPath]: mangaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mangaApi.middleware),
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
