import styled from '@emotion/styled';
import { Weight } from '../../../styles/theme/weight';
import { PropsType } from './@type';
import { Colors } from '../../../styles/theme/color';

export const _InputSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const _Title = styled.h1`
  font-weight: ${Weight.medium};
  font-size: 14px;
  padding-left: 7px;
  margin-bottom: 7px;
`;
export const _InputComponent = styled.div<PropsType>`
  display: flex;
  position: relative;
  max-width: ${({ width = 400 }) => width}px;
  height: ${({ height = 46 }) => height}px;
`;
export const _Input = styled.input<PropsType>`
  width: ${({ width = 400 }) => width};
  height: ${({ height = 46 }) => height};
  padding-left: 20px;
  border: 2px solid ${({ error }) => (error ? Colors.error : 'black')};
  border: ${({ border }) => border};
  border-radius: 4px;
  resize: none;

  &::placeholder {
    color: ${Colors.gray300};
  }

  &:focus {
    border: 2px solid ${Colors.focus};
  }
`;
export const _Icon = styled.button`
  position: absolute;
  right: 2px;
  top: 11px;
  background-color: white;
  padding-right: 20px;
  padding-left: 19px;
`;
export const _ErrorMessage = styled.span`
  position: relative;
  color: ${Colors.error};
  font-weight: ${Weight.regular};
  font-size: 14px;
  line-height: 22px;
`;
