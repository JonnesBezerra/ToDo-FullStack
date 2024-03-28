import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputTask from './InputText';

describe('InputText component', () => {
  it('should render with the provided label and value', () => {
    const label = 'Name';
    const value = 'John Doe';

    render(<InputTask label={label} value={value} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toHaveValue(value);
  });

  it('should update the value on user input', () => {
    const label = 'Email';
    const newValue = 'test@example.com';

    render(<InputTask label={label} />);

    const input = screen.getByLabelText(label);
    userEvent.type(input, newValue);

    expect(input).toHaveValue(newValue);
  });

  it('should call the onChange handler on value change', () => {
    const label = 'Message';
    const mockOnChange = jest.fn();

    render(<InputTask label={label} onChange={mockOnChange} />);

    const input = screen.getByLabelText(label);
    const newValue = 'Hello world!';

    userEvent.type(input, newValue);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Match event object
  });
});
