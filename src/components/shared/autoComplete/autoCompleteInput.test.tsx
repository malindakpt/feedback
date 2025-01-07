import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoCompleteInput from './autoCompleteInput';
import { Formik } from 'formik';
import { AutoCompleteOption } from '../../../interfaces/autoCompleteOptions';

describe('AutoCompleteInput Component', () => {
  const onChangeMock = jest.fn();

  const defaultProps = {
    label: 'Test Autocomplete',
    name: 'testAutocomplete',
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ] as AutoCompleteOption[],
    onChange: onChangeMock,
    required: false,
    disabled: false,
  };

  const renderComponent = (props = {}) => {
    render(
      <Formik initialValues={{ testAutocomplete: '' }} onSubmit={() => {}}>
        <AutoCompleteInput {...defaultProps} {...props} />
      </Formik>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with label', () => {
    renderComponent();
    expect(screen.getByLabelText('Test Autocomplete')).toBeInTheDocument();
  });

  it('should display options when clicked', async () => {
    renderComponent();

    const input = screen.getByLabelText('Test Autocomplete');
    fireEvent.mouseDown(input); // Simulate click to open dropdown

    expect(await screen.findByText('Option 1')).toBeInTheDocument();
    expect(await screen.findByText('Option 2')).toBeInTheDocument();
    expect(await screen.findByText('Option 3')).toBeInTheDocument();
  });

  it('should call onChange handler when an option is selected', async () => {
    renderComponent();

    const input = screen.getByLabelText('Test Autocomplete');
    fireEvent.mouseDown(input);

    const option = await screen.findByText('Option 1');
    fireEvent.click(option);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('1');
  });

  it('should display an error message when validation fails', () => {
    const validateInputMock = (value: string) =>
      !value ? 'This field is required' : '';

    renderComponent({ validateInput: validateInputMock });

    const input = screen.getByLabelText('Test Autocomplete');
    fireEvent.blur(input);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    renderComponent({ disabled: true });

    const input = screen.getByLabelText('Test Autocomplete');
    expect(input).toBeDisabled();
  });
});
