import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { describe, expect, test } from 'vitest';
import { Input } from '.';

describe('Input', () => {
  test('should input renders ', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Name" />);
    const inputElement = getByPlaceholderText('Name');
    expect(inputElement).toBeDefined();
  });

  test('should input is focused', () => {
    const { getByPlaceholderText, getByText } = render(<Input placeholder="Name" />);
    const inputElement = getByPlaceholderText('Name');

    fireEvent.focus(inputElement);

    const floatingLabelElement = getByText('Name');
    expect(floatingLabelElement).toBeTruthy();
  });
});
