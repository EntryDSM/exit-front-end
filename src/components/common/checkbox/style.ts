import styled from '@emotion/styled';
import { Colors } from '../../../styles/theme/color';

export const _input = styled.input`
  display: none;

  & + label {
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 2px solid ${Colors.gray400};
    border-radius: 1px;
    font-weight: bold;
  }

  &:checked + label::after {
    content: '✔';
    color: white;
    border-color: black;
    font-size: 12px;
  }

  &:hover + label {
    background-color: ${Colors.gray100};
  }
`;
