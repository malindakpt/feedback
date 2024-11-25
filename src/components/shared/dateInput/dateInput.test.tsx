import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateInput from './dateInput'; 

describe('DateInput Component', () => {
  const onChangeMock = jest.fn();

  it('should render with label and value', () => {
    render(
      <DateInput label="Start Date" value="2024-01-01" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText('Start Date');

    // Check if the input is rendered
    expect(input).toBeInTheDocument();

    // Check if the input has the correct value
    expect(input).toHaveValue('2024-01-01');
  });

  it('should call onChange handler when input changes', () => {
    render(
      <DateInput label="Start Date" value="" onChange={onChangeMock} />
    );

    const input = screen.getByLabelText('Start Date');

    fireEvent.change(input, { target: { value: '2024-02-01' } });

    // Check if onChangeMock is called
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    // Check if onChangeMock is called with correct value
    expect(onChangeMock).toHaveBeenCalledWith('2024-02-01');
  });
});
