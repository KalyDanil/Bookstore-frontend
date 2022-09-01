export type CartBooksResponseType = Array<ICartBook>;

export interface ICartBook {
  id: number;
  name: string;
  authorName: string;
  description1: string;
  description2: string;
  description3: string;
  price: number;
  paperBackPrice: number;
  rating: number;
  dateOfIssue: string;
  cover: string;
  status: string;
  genre: string;
  selectStatus: boolean;
  cartBooks: Array<{
    amount: number;
  }>;
}

export interface ICartBooks {
  book: ICartBook;
}

export interface ILikedBook {
  id: number;
  name: string;
  authorName: string;
  description1: string;
  description2: string;
  description3: string;
  price: number;
  paperBackPrice: number;
  rating: number;
  dateOfIssue: string;
  cover: string;
  status: string;
  genre: string;
  selectStatus: boolean;
}

export interface IComment {
  comment: string;
  time: Record<string, unknown>;
  commentator: string;
  avatar: string;
}

export interface IComments {
  comment: IComment;
}

export interface IGetBooksReq {
  genres: string[];
  minPrice: string | number | null;
  maxPrice: string | number | null;
  sortBy: string | null;
  search: string | null;
  page: string | null;
  limit: number;
  userId: number | string;
}

export interface IGetLikedBooksReq {
  page: string | null;
  limit: number;
  userId: number;
}

export interface IGetSelectedBookReq {
  bookId?: string;
  userId: number;
}

export interface IGetRecommendationsReq {
  limit: number;
  userId: number;
  bookId?: string;
}

export interface IChangeRatingReq {
  rating: number;
  userId: number;
  bookId: number;
}

export interface IMakeCommentReq {
  userId: number;
  bookId: number;
  comment: string;
  commentDate: Date;
}

export interface IAddBookToCartReq {
  userId: number;
  bookId?: number | string;
}

export interface IDeleteBookFromCartReq {
  userId: number;
  bookId?: number | string;
}

export interface IChangeBooksAmountReq {
  userId: number;
  bookId?: number | string;
  amount: number;
}

export interface IToLikeBookReq {
  userId: number;
  bookId?: string;
  like: boolean;
}

export interface IGetCartBooksReq {
  userId: number;
}
