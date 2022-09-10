import type { IRegistrationUser } from './user';
import type { IComment, CartBooksResponseType } from './userBooks';

export type BooksResponseType = Array<IBook>;

export interface IBook {
  id: number;
  name: string;
  authorName: string;
  description: string;
  price: number;
  paperBackPrice: number;
  rating: number;
  dateOfIssue: string;
  cover: string;
  status: string;
  genre: string;
  selectStatus: boolean;
  cartBooks: Array<IRegistrationUser>;
  likedBooks: Array<{ userId: number } | undefined>;
}

export interface IBooks {
  book: IBook;
}

export interface IMinMaxPayload {
  minPrice: number;
  maxPrice: number;
}

export interface IRating {
  index: number;
  rating: number;
}

export interface IGenre {
  id: number;
  name: string;
  genre: string;
}

export type GenresResponseType = Array<IGenre>;

export interface IStars {
  value: number;
}

export interface IPageCount {
  pageCount: number;
}

export interface IState {
  books: BooksResponseType;
  booksCount: number;
  cartBooksAmount: number;
  cartBooksLength: number;
  limit: number;
  selectedFilterButton: string;
  cartBooks: CartBooksResponseType;
  maxRating: number;
  page: number;
  minPrice: number;
  maxPrice: number;
  genres: GenresResponseType;
  selectedGenres: string[];
  idBook: number;
  selectedBook: IBook;
  selectedBookLike: string;
  comments: IComment[];
  userRating: number;
  totalPrice: number;
}
