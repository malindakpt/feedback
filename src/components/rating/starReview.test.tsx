import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StarReview } from './StarReview';

describe('StarReview Component', () => {
  test('updates the star rating visually when a star is clicked', async () => {
    render(<StarReview onRatingChange={() => {}} type="star" />);

    // Find all star radio buttons
    const stars = screen.getAllByRole('radio');

    // Simulate selecting the 3rd star
    await userEvent.click(stars[2]);

    // Verify that the 3rd star is now selected
    expect(stars[2]).toHaveAttribute('aria-checked', 'true');
  });

  test('updates the face rating visually when a face is clicked', async () => {
    render(<StarReview onRatingChange={() => {}} type="face" />);

    // Find all face radio buttons
    const faces = screen.getAllByRole('radio');

    // Simulate selecting the 5th face
    await userEvent.click(faces[4]);

    // Verify that the 5th face is now selected
    expect(faces[4]).toHaveAttribute('aria-checked', 'true');
  });
});
