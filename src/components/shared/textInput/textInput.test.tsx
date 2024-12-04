import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './textInput'; 

describe('TextInput Component', () => {
  const onChangeMock = jest.fn();

  it('should render with label and value', () => {
    render(
      <TextInput label="Username" name="username" value="Nithila" onChange={onChangeMock} />
    );
    
    const input = screen.getByLabelText('Username');
    
    // Check if the input is rendered
    expect(input).toBeInTheDocument();
    
    // Check if the input has the correct value
    expect(input).toHaveValue('Nithila');
  });

  it('should call onChange handler when input changes', () => {
    render(
      <TextInput label="Username" value="" name="" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText('Username');

    fireEvent.change(input, { target: { value: 'new value' } });

    // Check if onChangeMock is called
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    // Check if onChangeMock is called with correct value
    expect(onChangeMock).toHaveBeenCalledWith('new value');
  });

 

  
});