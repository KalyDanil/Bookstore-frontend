import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { booksSlice } from './slicer';
/* eslint-disable */
import { 
  changeRating, 
  getBooks, 
  getLikedBooks, 
  getRecommendations, 
  getSelectedBook, 
  makeComment, 
  toLikeBook, 
} from '../../../api/booksApi';
import { 
  IChangeRatingReq, 
  IGetBooksReq, 
  IGetLikedBooksReq, 
  IGetRecommendationsReq, 
  IGetSelectedBookReq, 
  IMakeCommentReq, 
  IToLikeBookReq, 
} from '../../../types/userBooks';
/* eslint-enable */

export const {
  getBooksAction,
  getBooksCountAction,
  getPageAction,
  selectFilterButtonAction,
  getAllGenresAction,
  getRatingAction,
  addGenreAction,
  getMinMaxPriceAction,
  removeGenreAction,
  getSelectedBookAction,
  changeLikeAction,
  getUserRatingAction,
  getCommentsAction,
  getCartBooksAction,
  changeCartAmountAction,
  changeCartLengthAction,
  changeTotalPriceAction,
} = booksSlice.actions;

export const getBooksRequest = createAsyncThunk('main/all-books',
  async (params: IGetBooksReq, { dispatch }) => {
    try {
      const res = await getBooks(params);
      dispatch(getBooksAction(res.books));
      dispatch(getBooksCountAction(res.booksCount));
      dispatch(getMinMaxPriceAction(res));
      dispatch(getAllGenresAction(res.genres));
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const getLikedBooksRequest = createAsyncThunk('main/liked-books',
  async (params: IGetLikedBooksReq, { dispatch }) => {
    try {
      const res = await getLikedBooks(params);
      dispatch(getBooksAction(res.books));
      dispatch(getBooksCountAction(res.booksCount));
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const getSelectedBookRequest = createAsyncThunk('book-page',
  async (params: IGetSelectedBookReq, { dispatch }) => {
    try {
      const res = await getSelectedBook(params);
      dispatch(getSelectedBookAction(res.book));
      dispatch(getCommentsAction(res.comments));
      dispatch(getUserRatingAction(res.userRating));
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const getRecommendationsRequest = createAsyncThunk('book-page/recommendations',
  async (params: IGetRecommendationsReq, { dispatch }) => {
    try {
      const res = await getRecommendations(params);
      dispatch(getBooksAction(res));
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const changeRatingRequest = createAsyncThunk('book-page/change-rating',
  async (body: IChangeRatingReq) => {
    try {
      changeRating(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const makeCommentRequest = createAsyncThunk('book-page/make-comment',
  async (body: IMakeCommentReq) => {
    try {
      makeComment(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });

export const toLikeBookRequest = createAsyncThunk('to-like-book',
  async (body: IToLikeBookReq) => {
    try {
      toLikeBook(body);
    } catch (err) {
      toast((err as Error).message);
    }
  });
