import styled from '@emotion/styled';
import { Colors } from '../../../styles/theme/color';
import { PropsTypes } from './@types';
import { Weight } from '../../../styles/theme/weight';

export const _dropdownSection = styled.div<PropsTypes>`
  display: flex;
  flex-direction: column;
  width: ${({ width = 240 }) =>
    typeof width == 'number' ? width + 'px' : width};
`;
export const _Title = styled.span<PropsTypes>`
  font-weight: ${Weight.medium};
  font-size: 14px;
  padding-left: 7px;
  margin-bottom: 7px;
`;
export const _dropdownWrapper = styled.div<PropsTypes>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid ${Colors.gray800};
  border-radius: 2px;
  height: ${({ height = 46 }) =>
    typeof height == 'number' ? height + 'px' : height};
`;
export const _selectSection = styled.div<PropsTypes>`
  position: absolute;
  overflow-y: scroll;
  max-height: 138px;
  margin-top: ${({ height = 46 }) =>
    typeof height == 'number' ? height + 'px' : height};
  border-radius: 2px;
  z-index: 2;

  div {
    height: ${({ height = 46 }) =>
      typeof height == 'number' ? height + 'px' : height};
    position: relative;
  }

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
export const _selectWrapper = styled.div<PropsTypes>`
  display: flex;
  border-radius: 2px;
  width: ${({ width = 240 }) =>
    typeof width == 'number' ? width + 'px' : width};
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
  gap: 0.5px;
  background-color: ${Colors.gray100};

  &:hover {
    background-color: ${Colors.gray200};
  }
`;
