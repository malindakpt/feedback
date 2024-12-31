import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StarReview, customIcons } from './starReview';

describe('StarReview Component', () => {
  it('renders the component with default type (star)', () => {
    render(<StarReview onRatingChange={jest.fn()} />);
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  });

  it('renders the component with type "face"', () => {
    render(<StarReview onRatingChange={jest.fn()} type="face" />);
    expect(screen.getByTestId('face-rating')).toBeInTheDocument();
  });

  it('handles rating change for "star" type', () => {
    const mockOnRatingChange = jest.fn();
    render(<StarReview onRatingChange={mockOnRatingChange} />);

    const firstIcon = screen.getByTestId('icon-container-1');
    fireEvent.click(firstIcon);

    expect(mockOnRatingChange).toHaveBeenCalledWith(1);
  });
});
