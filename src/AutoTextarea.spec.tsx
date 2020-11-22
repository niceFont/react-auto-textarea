import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AutoTextarea from './AutoTextarea';

test('Renders without any props', async () => {
  const { container } = render(<AutoTextarea />);

  const textarea = container.querySelector('textarea');
  expect(textarea).not.toBeNull();
  expect(textarea?.getAttribute('rows')).toEqual('1');
});

test('Renders with value', async () => {
  const text = 'This\nis\na\ntest';
  render(<AutoTextarea value={text} />);
  const textarea = screen.getByText('This is a test');

  expect(textarea.getAttribute('rows')).toEqual('4');
});

test('Updates rows based on value', async () => {
  const { container } = render(<AutoTextarea />);

  const textarea = container.querySelector('textarea');
  expect(textarea).not.toBeNull();
  // @ts-ignore
  expect(textarea.getAttribute('rows')).toEqual('1');
  // @ts-ignore
  fireEvent.change(textarea, { target: { value: 'Testing\nthis\nagain.' } });
  // @ts-ignore
  expect(textarea.getAttribute('rows')).toEqual('3');
});

test('Calls onChange prop function if provided', async () => {
  const mockOnChangeHandler = jest.fn();
  const { container } = render(<AutoTextarea onChange={mockOnChangeHandler} />);

  const textarea = container.querySelector('textarea');
  expect(textarea).not.toBeNull();
  // @ts-ignore
  expect(textarea.getAttribute('rows')).toEqual('1');
  // @ts-ignore
  fireEvent.change(textarea, { target: { value: 'Testing\nthis\nagain.' } });
  // @ts-ignore
  expect(textarea.getAttribute('rows')).toEqual('3');
  expect(mockOnChangeHandler).toHaveBeenCalledWith(expect.any(Object));
});
