import { render, screen, fireEvent } from '@testing-library/react';
import Comments from './comments';

describe('CommentBox Component', () => {
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  test('renders with initial value', () => {
    render(<Comments value="Initial comment" onChange={onChangeMock} />);
    const textField = screen.getByLabelText(/comment/i);
    expect(textField).toHaveValue('Initial comment');
  });

  test('calls onChange when typing in the TextField', () => {
    render(<Comments value="" onChange={onChangeMock} />);
    const textField = screen.getByLabelText(/comment/i);

    fireEvent.change(textField, { target: { value: 'User input' } });
    expect(onChangeMock).toHaveBeenCalledWith('User input');
  });

  test('clears placeholder text on focus when isDefault is true', () => {
    render(<Comments value="Add your comment here.." onChange={onChangeMock} />);
    const textField = screen.getByLabelText(/comment/i);

    fireEvent.focus(textField);
    expect(onChangeMock).toHaveBeenCalledWith('');
  });

  test('appends predefined text to existing value', () => {
    render(<Comments value="Existing comment" onChange={onChangeMock} />);
    const button = screen.getByText('Excellent service.');

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith('Existing comment Excellent service.');
  });
  
  test('replaces value with predefined text when isDefault is true', () => {
    render(<Comments value="Add your comment here.." onChange={onChangeMock} />);
    const button = screen.getByText('Very satisfied.');

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith('Very satisfied.');
  });

  test('resets to default placeholder text on submit', () => {
    render(<Comments value="Some comment" onChange={onChangeMock} />);
    const submitButton = screen.getByText(/submit comment/i);

    fireEvent.click(submitButton);
    expect(onChangeMock).toHaveBeenCalledWith('Add your comment here..');
  });
});
