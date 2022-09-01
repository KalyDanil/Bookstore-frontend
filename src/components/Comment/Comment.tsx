import { useState, useEffect } from 'react';
import { CommentStyle } from './Comment.styled';
import type { IComments } from '../../types/userBooks';

const Comment: React.FC<IComments> = ({ comment }) => {
  const dayjs = require('dayjs'); // eslint-disable-line
  const [timestampValue, setTimestampValue] = useState(0);
  const [timestampName, setTimestampName] = useState('');
  const timeAgo = Math.round((dayjs() - dayjs(comment.time)) / 1000);
  useEffect(() => {
    const putTimeAgo = () => {
      if (Number.isNaN(timeAgo)) {
        setTimestampValue((dayjs() - dayjs(comment.time)));
        setTimestampName('seconds');
        return;
      }
      if (timeAgo < 60) {
        setTimestampValue(timeAgo);
        setTimestampName('seconds');
        return;
      }
      if (timeAgo >= 60 && timeAgo < 3600) {
        setTimestampValue(Math.round(timeAgo / 60));
        setTimestampName('minutes');
        return;
      }
      if (timeAgo >= 3600 && timeAgo < 86400) {
        setTimestampValue(Math.round(timeAgo / 60 / 60));
        setTimestampName('hours');
        return;
      }
      if (timeAgo >= 86400) {
        setTimestampValue(Math.round(timeAgo / 60 / 60 / 24));
        setTimestampName('days');
      }
    };
    putTimeAgo();
  }, [comment.time, dayjs, timeAgo]);

  return (
    <CommentStyle>
      <img src={comment.avatar} alt="avatar" />
      <p className="comments__commentator">{comment.commentator}</p>
      <p className="comments__date">Left a comment {timestampValue} {timestampName} ago</p>
      <p className="comments__text">
        {comment.comment}
      </p>
    </CommentStyle>
  );
};

export default Comment;
