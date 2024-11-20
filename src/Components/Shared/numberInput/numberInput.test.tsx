import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInput from './NumberInput'; 

describe('NumberInput Component', () => {
  const onChangeMock = jest.fn();

  it('should render with label and value', () => {
    render(
      <NumberInput label="Age" value="25" onChange={onChangeMock} />
    );
    
    const input = screen.getByLabelText('Age');
    
    // Check if the input is rendered
    expect(input).toBeInTheDocument();
    
    // Check if the input has the correct value
    expect(input).toHaveValue(25);
  });

  it('should call onChange handler when input changes', () => {
    render(
      <NumberInput label="Age" value="0" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText('Age');

    fireEvent.change(input, { target: { value: '30' } });

    // Check if onChangeMock is called
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    // Check if onChangeMock is called with correct value
    expect(onChangeMock).toHaveBeenCalledWith('30');
  });

  it('should show an error state when error prop is true', () => {
    const { container } = render(
      <NumberInput label="Age" value="0" onChange={onChangeMock} error />
    );
  
    // Find the element with the Mui-error class (if using Material UI)
    const errorElement = container.querySelector('.Mui-error');
  
    expect(errorElement).toBeInTheDocument(); // Ensure that the error class is applied
  });
  
  it('should mark the field as required when required prop is true', () => {
    render(
      <NumberInput label="Age" value="0" onChange={onChangeMock} required />
    );

    const input = screen.getByLabelText(/age/i);

    // Check if input is required
    expect(input).toBeRequired();
  });

  it('should not accept non-numeric input', () => {
    render(
      <NumberInput label="Age" value="0" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText(/age/i);

    // Try to input a non-numeric value
    fireEvent.change(input, { target: { value: 'abc' } });

    // The value should remain unchanged as the input only accepts numbers
    expect(input).toHaveValue(0);
  });
});
