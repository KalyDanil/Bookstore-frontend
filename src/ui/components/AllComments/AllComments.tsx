import { useState } from 'react';
import Comment from '../Comment';
import { makeCommentRequest } from '../../../store/reducers/bookReducer/thunks';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { AllCommentsStyle } from './AllComments.styled';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';

const AllComments: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.user);
  const [newComment, setNewComment] = useState('');
  const dispatch = useAppDispatch();
  const commentsArr = (books.comments).map((item, index) => {
    return (<Comment comment={item} key={index} />);
  });

  const submitComment = async () => {
    const body = {
      userId: user.id,
      bookId: books.selectedBook.id,
      comment: newComment,
      commentDate: new Date(),
    };
    await dispatch(makeCommentRequest(body));
  };

  const inputNewComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <AllCommentsStyle isLoggedIn={user.tokenIsValid}>
      <h1>Comments</h1>
      {commentsArr}
      <form className="makingComments" onSubmit={submitComment}>
        <input type="text" className="makingComments__text" placeholder="Share a comment" onChange={inputNewComment} value={newComment} />
        <input type="submit" className="makingComments__button" value="Post a comment" />
      </form>
    </AllCommentsStyle>
  );
};

export default AllComments;
