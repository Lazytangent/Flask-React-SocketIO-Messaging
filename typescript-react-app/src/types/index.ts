import { useDispatch } from 'react-redux';
import { store } from '../index.tsx';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
