import { ButtonProps } from './interface';
import { ButtonStyled } from './style';

export const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
