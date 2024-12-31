import { render, screen, fireEvent } from '@testing-library/react';
import CommentBox from './comments';

describe('CommentBox Component', () => {
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  test('renders with initial value', () => {
    render(<CommentBox value="Initial comment" onChange={onChangeMock} label="Comment" />);
    const textField = screen.getByLabelText(/comment/i);
    expect(textField).toHaveValue('Initial comment');
  });

  test('calls onChange when typing in the TextField', () => {
    render(<CommentBox value="" onChange={onChangeMock} label="Comment" />);
    const textField = screen.getByLabelText(/comment/i);

    fireEvent.change(textField, { target: { value: 'User input' } });
    expect(onChangeMock).toHaveBeenCalledWith('User input');
  });

  test('clears placeholder text on focus when isDefault is true', () => {
    render(<CommentBox value="Add your comment here.." onChange={onChangeMock} label="Comment" initialValue="Add your comment here.." />);
    const textField = screen.getByLabelText(/comment/i);

    fireEvent.focus(textField);
    expect(onChangeMock).toHaveBeenCalledWith('');
  });

  test('appends predefined text to existing value', () => {
    render(<CommentBox value="Existing comment" onChange={onChangeMock} label="Comment" />);
    const button = screen.getByText('Excellent service.');

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith('Existing comment Excellent service.');
  });

  test('replaces value with predefined text when isDefault is true', () => {
    render(<CommentBox value="Add your comment here.." onChange={onChangeMock} label="Comment" initialValue="Add your comment here.." />);
    const button = screen.getByText('Very satisfied.');

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith('Very satisfied.');
  });

  test('resets to initial value after clicking Add Comment button', () => {
    render(<CommentBox value="Final comment" onChange={onChangeMock} label="Comment" initialValue="Add your comment here.." />);
    const addButton = screen.getByText(/add comment/i);

    fireEvent.click(addButton);
    expect(onChangeMock).toHaveBeenCalledWith('Add your comment here..');
  });

  test('disables input and buttons when disabled prop is true', () => {
    render(<CommentBox value="Disabled comment" onChange={onChangeMock} label="Comment" disabled />);
    
    const textField = screen.getByLabelText(/comment/i);
    const button = screen.getByRole('button', { name: /excellent service/i });
  
    // Verify the input and button are disabled
    expect(textField).toBeDisabled();
    expect(button).toBeDisabled();
  });
  
});
