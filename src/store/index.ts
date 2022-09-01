import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer/slicer';
import booksReducer from './reducers/bookReducer/slicer';

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export default store;
