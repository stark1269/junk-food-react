import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import { setUser, refreshingOff } from './slice';


export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      return { email: data.user.email };
    } catch (error) {
      Notiflix.Notify.failure('User validation failed');
      return rejectWithValue(error.message);
    }
  });

export const logIn = createAsyncThunk(
  'auth/login',
  async ({email, password}, { rejectWithValue }) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      return { email: data.user.email };
    } catch (error) {
      Notiflix.Notify.failure('Incorrect user name or password!')
      return rejectWithValue(error.message);
    }
  });

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const refreshUser = createAsyncThunk('auth/refresh', (_, { rejectWithValue, dispatch }) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email }));
      }
      else {
        signOut(auth);
        dispatch(refreshingOff());
      }
    })
  } catch (error) {
    return rejectWithValue(error.message);
  }
});