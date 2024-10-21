import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput'; // adjust the import path if necessary

describe('TextInput Component', () => {
  const onChangeMock = jest.fn();

  it('should render with label and value', () => {
    render(
      <TextInput label="Username" value="Nithila" onChange={onChangeMock} />
    );
    
    const input = screen.getByLabelText('Username');
    
    // Check if the input is rendered
    expect(input).toBeInTheDocument();
    
    // Check if the input has the correct value
    expect(input).toHaveValue('Nithila');
  });

  it('should call onChange handler when input changes', () => {
    render(
      <TextInput label="Username" value="" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText('Username');

    fireEvent.change(input, { target: { value: 'new value' } });

    // Check if onChangeMock is called
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    // Check if onChangeMock is called with correct value
    expect(onChangeMock).toHaveBeenCalledWith('new value');
  });

  // it('should show an error state when error prop is true', () => {
  //   const { container } = render(
  //     <TextInput label="Username" value="" onChange={onChangeMock} error />
  //   );
  
  //   // Find the element with the Mui-error class (usually on the input wrapper or the fieldset)
  //   const errorElement = container.querySelector('.Mui-error');
  
  //   expect(errorElement).toBeInTheDocument(); // Ensure that the error class is applied
  // });
  

  // it('should mark the field as required when required prop is true', () => {
  //   render(
  //     <TextInput label="Username" value="" onChange={onChangeMock} required />
  //   );

  //   const input = screen.getByLabelText(/username/i);

  //   // Check if input is required
  //   expect(input).toBeRequired();
  // });
});
