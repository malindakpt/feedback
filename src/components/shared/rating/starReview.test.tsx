import { render, screen, fireEvent } from '@testing-library/react';
import { StarReview } from './starReview';
import { Formik } from 'formik';

describe('StarReview Component', () => {

  test('renders star rating when type is "star"', () => {
    render(
      <Formik initialValues={{ rating: 3 }} onSubmit={() => {}}>
        <StarReview name="rating" type="star" />
      </Formik>
    );

    const starRating = screen.getByTestId('face-rating');
    expect(starRating).toBeInTheDocument();
  });

  test('renders face rating when type is "face"', () => {
    render(
      <Formik initialValues={{ rating: 3 }} onSubmit={() => {}}>
        <StarReview name="rating" type="face" />
      </Formik>
    );

    const faceRating = screen.getByTestId('star-rating');
    expect(faceRating).toBeInTheDocument();
  });

  test('displays error message when errorText is passed', () => {
    render(
      <Formik initialValues={{ rating: 3 }} onSubmit={() => {}}>
        <StarReview name="rating" errorText="This field is required" />
      </Formik>
    );

    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

});
