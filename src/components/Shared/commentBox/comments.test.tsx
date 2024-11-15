import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from './comments';

describe('Comments', () => {
  it("renders the comment text area and predefined text buttons", () => {
    render(
        <Comments value={''} onChange={function (value: string): void {
        throw new Error('Function not implemented.');
      } } />
    );

    expect(screen.getByLabelText('Comment')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(1);
  });
});


