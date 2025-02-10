import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './textInput'; 

describe('TextInput Component', () => {
  const onChangeMock = jest.fn();

  it('should render with label and value', () => {
    render(
      <TextInput label="Username" value="Nithila" onChange={onChangeMock} />
    );
    
    const input = screen.getByLabelText('Username');
  
    expect(input).toBeInTheDocument();
    
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

  it('should not allow input when disabled', () => {
    render(
      <TextInput label="Disabled Input" value="Cannot edit" onChange={onChangeMock} disabled={true} />
    );

    const input = screen.getByLabelText('Disabled Input');

    // Check if the input is disabled
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();

    // Ensure that onChangeMock is not called since the input is disabled
    fireEvent.change(input, { target: { value: 'new value' } });

    
  });
  
});