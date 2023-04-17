import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
  border-radius: 4px;
  background-color: #1e2733;
`;

export const InputStyled = styled.input`
  width: 100%;

  margin: 0;
  padding: 1rem 1rem;

  font-size: 16px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  outline: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 10px;
    transform: translate(0, -18px);
    pointer-events: none;
  }

  &::placeholder {
    color: #7c8994;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 30%;
  font-size: 10px;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  color: #7c8994;
`;
