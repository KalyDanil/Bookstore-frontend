import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
/* eslint-disable */
import { 
  addBookToCart,
  changeBooksAmount, 
  deleteBookFromCart, 
  getCartBooks 
} from '../../../api/booksApi';
import type { 
  IAddBookToCartReq, 
  IDeleteBookFromCartReq, 
  IGetCartBooksReq 
} from '../../../types/userBooks';
/* eslint-enable */
import { booksSlice } from './slicer';

export const {
  getCartBooksAction,
} = booksSlice.actions;

export const addBookToCartRequest = createAsyncThunk('add-book-to-cart',
  async (body: IAddBookToCartReq) => {
    try {
      addBookToCart(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const changeBooksAmountRequest = createAsyncThunk('change-books-amount',
  async (body: IAddBookToCartReq) => {
    try {
      changeBooksAmount(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const deleteBookFromCartRequest = createAsyncThunk('delete-book-from-cart',
  async (body: IDeleteBookFromCartReq) => {
    try {
      deleteBookFromCart(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const getCartBooksRequest = createAsyncThunk('cart',
  async (params: IGetCartBooksReq, { dispatch }) => {
    try {
      const res = await getCartBooks(params);
      let booksAmount = 0;
      res.map((item) => {
        booksAmount += item.cartBooks[0].amount;
        return booksAmount;
      });
      dispatch(getCartBooksAction({ books: res, amount: booksAmount }));
    } catch (err) {
      toast((err as Error).message);
    }
  });
