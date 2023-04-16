import { render, fireEvent } from '@testing-library/react';

import { describe, beforeEach, afterEach, test, vi } from 'vitest';

import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../services/api/auth/auth.service';
import { Login } from '.';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../../services/api/auth/auth.service', () => ({
  authenticate: vi.fn(),
}));

describe('Login', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('should render the component', () => {
    const { getByPlaceholderText, getByRole } = render(<Login />);

    expect(getByPlaceholderText('Código do usuário')).toBeTruthy();
    expect(getByRole('button', { name: 'Confirmar' })).toBeTruthy();
  });

  test('should submit form', async () => {
    const userCode = 'teste';
    (authenticate as any).mockResolvedValue(true);

    const { getByPlaceholderText, getByRole } = render(<Login />);

    const input = getByPlaceholderText('Código do usuário');
    const button = getByRole('button', { name: 'Confirmar' });

    fireEvent.change(input, { target: { value: userCode } });
    fireEvent.click(button);

    expect(authenticate).toHaveBeenCalledWith(userCode);
    expect(useNavigate).toHaveBeenCalledWith();
  });
});
