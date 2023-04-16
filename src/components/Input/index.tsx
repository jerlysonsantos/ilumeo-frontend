import React, { useState } from 'react';
import { InputStyled, InputWrapper, Label } from './Input.style';
import { InputProps } from './Input.interface';

export const Input = ({ placeholder, ...rest }: InputProps) => {
  const [placeholderShown, setPlaceholderShown] = useState(true);

  const handleFocus = () => {
    setPlaceholderShown(false);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setPlaceholderShown(true);
    }
  };

  return (
    <InputWrapper>
      <InputStyled
        placeholder={placeholderShown ? placeholder : ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <Label>{!placeholderShown && placeholder}</Label>
    </InputWrapper>
  );
};

export default Input;
