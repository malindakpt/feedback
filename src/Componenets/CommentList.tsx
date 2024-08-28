import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CommentList: React.FC = () => {
  const comments = useSelector((state: RootState) => state.comments.comments);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
