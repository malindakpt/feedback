import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoCompleteInput from './autoCompleteInput';
import { AutoCompleteInputProps } from './autoCompleteInput';

describe('AutoCompleteInput Component', () => {
  const onChangeMock = jest.fn();

  const defaultProps: AutoCompleteInputProps = {
    label: 'Test Autocomplete',
    value: '',
    onChange: onChangeMock,
    options: ['Option 1', 'Option 2', 'Option 3'],
  };

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it('should render with label', () => {
    render(<AutoCompleteInput {...defaultProps} />);

    const input = screen.getByLabelText('Test Autocomplete');

    // Check if the input is rendered
    expect(input).toBeInTheDocument();
  });

  it('should display options when clicked', async () => {
    render(<AutoCompleteInput {...defaultProps} />);
  
    const input = screen.getByLabelText('Test Autocomplete');
  
    // Simulate click to open options
    fireEvent.mouseDown(input);
  
    // Wait for options to be displayed
    expect(await screen.findByText('Option 1')).toBeInTheDocument();
    expect(await screen.findByText('Option 2')).toBeInTheDocument();
    expect(await screen.findByText('Option 3')).toBeInTheDocument();
  });
  
  it('should call onChange handler when an option is selected', async () => {
    render(<AutoCompleteInput {...defaultProps} />);
  
    const input = screen.getByLabelText('Test Autocomplete');
  
    // Simulate click to open options
    fireEvent.mouseDown(input);
  
    // Wait for the option to appear and simulate selection
    const option = await screen.findByText('Option 1');
    fireEvent.click(option);
  
    // Check if onChangeMock is called with the correct value
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Option 1');
  });
  

  it('should display an error message when validation fails', () => {
    const validateInputMock = (value: string) => {
      if (!value) return 'This field is required';
      return '';
    };

    render(
      <AutoCompleteInput
        {...defaultProps}
        value=""
        validateInput={validateInputMock}
      />
    );

    const input = screen.getByLabelText('Test Autocomplete');
    
    // Simulate blur event
    fireEvent.blur(input);

    // Check if the error message is displayed
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<AutoCompleteInput {...defaultProps} disabled={true} />);
  
    const input = screen.getByLabelText('Test Autocomplete');
  
    // Check if the input is effectively disabled
    expect(input).toHaveAttribute('disabled');
  });
  
  it('should not display any options if options list is empty', () => {
    render(<AutoCompleteInput {...defaultProps} options={[]} />);

    const input = screen.getByLabelText('Test Autocomplete');
    
    // Simulate click to open options
    fireEvent.click(input);

    // Check if no options are displayed
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
