import styled from '@emotion/styled';
import { Colors } from '../../../styles/theme/color';

export const _dropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;
export const _dropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid ${Colors.gray800};
  border-radius: 2px;
  height: 46px;
`;
export const _selectSection = styled.div`
  overflow-y: scroll;
  max-height: 138px;
  margin-top: 10px;
  border-radius: 2px;

  div {
    height: 45px;
    position: relative;
  }

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
export const _selectWrapper = styled.div`
  display: flex;
  border-radius: 2px;
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
