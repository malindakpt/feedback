import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Formik, Form } from 'formik';
import TextInput from './textInput';

describe('TextInput Component', () => {
  const initialValues = { username: '' };

  // Utility to render the component with Formik
  const renderWithFormik = (component: React.ReactNode, initialFormikValues = initialValues) => {
    return render(
      <Formik initialValues={initialFormikValues} onSubmit={jest.fn()}>
        <Form>{component}</Form>
      </Formik>
    );
  };

  it('should render with label and initial value from Formik', () => {
    const updatedInitialValues = { username: 'Nithila' };

    renderWithFormik(<TextInput label="Username" name="username" />, updatedInitialValues);

    const input = screen.getByLabelText('Username');

    // Check if the input is rendered
    expect(input).toBeInTheDocument();

    // Check if the input has the correct initial value
    expect(input).toHaveValue('Nithila');
  });

  it('should update value on change', () => {
    renderWithFormik(<TextInput label="Username" name="username" />);

    const input = screen.getByLabelText('Username');

    // Simulate user input
    fireEvent.change(input, { target: { value: 'new value' } });

    // Check if the value updates correctly
    expect(input).toHaveValue('new value');
  });

  it('should trigger onBlur when the input loses focus', () => {
    renderWithFormik(<TextInput label="Username" name="username" />);

    const input = screen.getByLabelText('Username');

    // Simulate blur event
    fireEvent.blur(input);

    // Check if the input is still rendered
    expect(input).toBeInTheDocument(); // Blur should not remove input
  });

  it('should display error text when provided', () => {
    renderWithFormik(
      <TextInput label="Email" name="email" errorText="Invalid email address" />
    );

    // Check if the error message is displayed
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('should render as disabled when the disabled prop is true', () => {
    renderWithFormik(<TextInput label="Username" name="username" disabled />);

    const input = screen.getByLabelText('Username');

    // Check if the input is disabled
    expect(input).toBeDisabled();
  });
});
