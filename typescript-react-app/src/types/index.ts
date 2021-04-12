import { useDispatch } from 'react-redux';
import { store } from '../index';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export interface User {
  username: string;
  email: string;
  id: number;
  errors?: string[];
}

export interface Action {
  type: string;
}
