import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { notLiked } from '../../../utils/constants';
import type {
  BooksResponseType,
  IBook,
  GenresResponseType,
  IState,
  IMinMaxPayload,
  IRating,
} from '../../../types/book';
import type { IComment, ICartPayload } from '../../../types/userBooks';

const getBooksAction = (state: IState, action: PayloadAction<BooksResponseType>) => {
  const stateChange = state;
  stateChange.books = action.payload;
};

const getBooksCountAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.booksCount = action.payload;
};

const getPageAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.page = action.payload;
};

const selectFilterButtonAction = (state: IState, action: PayloadAction<string>) => {
  const stateChange = state;
  stateChange.selectedFilterButton = action.payload;
};

const getMinMaxPriceAction = (state: IState, action: PayloadAction<IMinMaxPayload>) => {
  const stateChange = state;
  stateChange.minPrice = action.payload.minPrice;
  stateChange.maxPrice = action.payload.maxPrice;
};

const getAllGenresAction = (state: IState, action: PayloadAction<GenresResponseType>) => {
  const stateChange = state;
  stateChange.genres = action.payload;
};

const getRatingAction = (state: IState, action: PayloadAction<IRating>) => {
  const stateChange = state;
  stateChange.books[action.payload.index].rating = action.payload.rating;
};

const addGenreAction = (state: IState, action: PayloadAction<string>) => {
  const stateChange = state;
  stateChange.selectedGenres.push(action.payload);
};

const removeGenreAction = (state: IState, action: PayloadAction<string>) => {
  const stateChange = state;
  const index = stateChange.selectedGenres.indexOf(action.payload);
  stateChange.selectedGenres.splice(index, 1);
};

const getSelectedBookAction = (state: IState, action: PayloadAction<IBook>) => {
  const stateChange = state;
  stateChange.selectedBook = action.payload;
};

const getUserRatingAction = (state: IState, action: PayloadAction<number | undefined>) => {
  const stateChange = state;
  if (action.payload !== undefined) {
    stateChange.userRating = action.payload;
  }
};

const changeLikeAction = (state: IState, action: PayloadAction<string>) => {
  const stateChange = state;
  stateChange.selectedBookLike = action.payload;
};

const getCommentsAction = (state: IState, action: PayloadAction<IComment[]>) => {
  const stateChange = state;
  stateChange.comments = action.payload;
};

const getCartBooksAction = (state: IState, action: PayloadAction<ICartPayload>) => {
  const stateChange = state;
  stateChange.cartBooks = action.payload.books;
  stateChange.cartBooksAmount = action.payload.amount;
};

const changeCartAmountAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.cartBooksAmount = action.payload;
};

const changeCartLengthAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.cartBooksLength -= action.payload;
};

const changeTotalPriceAction = (state: IState, action: PayloadAction<number>) => {
  const stateChange = state;
  stateChange.totalPrice += action.payload;
};

const initialState: IState = {
  books: [],
  booksCount: 0,
  cartBooksAmount: 0,
  cartBooksLength: 0,
  limit: 4,
  selectedFilterButton: '',
  cartBooks: [],
  page: 1,
  maxRating: 5,
  minPrice: 0,
  maxPrice: 1000,
  genres: [{ id: 0, name: '', genre: '' }],
  selectedGenres: [],
  idBook: 0,
  selectedBook: {
    id: 0,
    name: '',
    authorName: '',
    description: '',
    price: 0,
    paperBackPrice: 0,
    rating: 0,
    dateOfIssue: '',
    cover: '',
    status: '',
    genre: '',
    selectStatus: false,
    cartBooks: [],
    likedBooks: [],
  },
  selectedBookLike: notLiked,
  comments: [
    {
      comment: '',
      time: {},
      avatar: '',
      commentator: '',
    },
  ],
  userRating: 0,
  totalPrice: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooksAction,
    getBooksCountAction,
    getPageAction,
    selectFilterButtonAction,
    getMinMaxPriceAction,
    getAllGenresAction,
    getRatingAction,
    addGenreAction,
    removeGenreAction,
    getSelectedBookAction,
    changeLikeAction,
    getUserRatingAction,
    getCommentsAction,
    getCartBooksAction,
    changeCartAmountAction,
    changeCartLengthAction,
    changeTotalPriceAction,
  },
});

export default booksSlice.reducer;
