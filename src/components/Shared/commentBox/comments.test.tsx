import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from './comments';
import { Provider } from 'react-redux';
import { store } from './store';

describe('Comments', () => {
  it("renders the comment text area and predefined text buttons", () => {
    render(
      <Provider store={store}>
        <Comments />
      </Provider>
    );

    expect(screen.getByLabelText('Comment')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(1);
  });
});


