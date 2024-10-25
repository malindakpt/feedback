import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from './comments'; // Adjust path as necessary
import { Provider } from 'react-redux';
import { store } from './store'; // Adjust path as necessary
import { addComment } from './commentSlice'; // Action for comment submission

test ('renders comment box', () => {
  render(<Comments/>)
  const  commentBox = screen.getByText('outlined-multiline-static')

})


