import { ButtonProps } from './Button.interface';
import { ButtonStyled } from './Button.style';

export const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
