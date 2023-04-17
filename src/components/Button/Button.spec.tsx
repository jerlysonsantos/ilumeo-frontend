import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';
import { describe, expect, test, vi } from 'vitest';

describe('Button', () => {
  test('should button renders', () => {
    const { getByRole } = render(<Button onClick={() => {}}>Click me</Button>);

    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  test('should call onclick', () => {
    const onClickMock = vi.fn();

    const { getByRole } = render(<Button onClick={onClickMock}>Click me!</Button>);

    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
