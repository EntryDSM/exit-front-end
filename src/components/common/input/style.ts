import styled from '@emotion/styled/dist/emotion-styled.cjs';
import { Weight } from '../../../styles/theme/weight';
import { PropsType } from './type';
import { Colors } from '../../../styles/theme/color';
import { getBorderColorWithStatus } from './service';

export const inputSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const title = styled.h1`
  font-weight: ${Weight.regular}px;
  font-size: 14px;
  padding-left: 7px;
  margin-bottom: 7px;
`;
export const inputComponent = styled.div<PropsType>`
  position: relative;
  max-width: ${({ width = 400 }) => width}px;
  height: ${({ height = 46 }) => height}px;

  & > textarea {
    padding-top: 16px;
  }
`;
export const input = styled.input<PropsType>`
  width: ${({ width = 400 }) => width}px;
  height: ${({ height = 46 }) => height}px;
  padding-left: 20px;
  border: 2px solid
    ${({ statusTypes }) => getBorderColorWithStatus(statusTypes)};
  border-radius: 4px;
  color: ${Colors.gray300};
`;
export const errorMessage = styled.span`
  color: ${Colors.error};
  font-weight: ${Weight.regular};
  font-size: 14px;
  line-height: 22px;
`;
export const icon = styled.button<PropsType>`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 2px;
  background-color: white;
  width: 64px;
`;
