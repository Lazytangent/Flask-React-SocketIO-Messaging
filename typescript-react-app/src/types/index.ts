import { useDispatch } from 'react-redux';
import { store } from '../index.tsx';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export interface User {
  username: string;
  email: string;
  id: number;
  errors?: string[];
}
