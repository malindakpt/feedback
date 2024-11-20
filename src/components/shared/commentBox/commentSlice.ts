import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
  comments: string[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;