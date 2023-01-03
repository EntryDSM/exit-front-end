import { marginCssType } from '../../../utils/margin';
import { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { colorKeyOfType, Colors } from '../../../styles/theme/color';
import { Weight } from '../../../styles/theme/weight';
import Preview from '../../../assets/icon/preview.svg';
import NonePreview from '../../../assets/icon/non-preview.svg';

export enum EnumInputStatus {
  ENABLE = 'ENABLE',
  FOCUS = 'FOCUS',
  ERROR = 'ERROR',
}

interface PropsType extends marginCssType {
  className?: string;
  name: string;
  color: colorKeyOfType;
  width?: number;
  height?: number;
  statusTypes: EnumInputStatus;
  placeHolder?: string;
  isHiddenIcon?: boolean;
}

const getBorderColorWithStatus = (status: EnumInputStatus) => {
  switch (status) {
    case EnumInputStatus.ENABLE:
      return Colors.gray800;
    case EnumInputStatus.FOCUS:
      return Colors.check;
    case EnumInputStatus.ERROR:
      return Colors.error;
  }
};

export const Input = ({ ...props }: PropsType) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(props.statusTypes);
  const [isHiddenText, setIsHiddenText] = useState();

  enum EnumInputAction {
    FOCUS = 'FOCUS',
    ENABLE = 'ENABLE',
    ERROR = 'ERROR',
  }

  const onAction = (action: EnumInputAction) => {
    switch (action) {
      case EnumInputAction.ENABLE:
        setStatus(EnumInputStatus.ENABLE);
      case EnumInputAction.FOCUS:
        setStatus(EnumInputStatus.FOCUS);
      case EnumInputAction.ERROR:
        setStatus(EnumInputStatus.ERROR);
    }
  };
  const dispatchAction = (action: EnumInputAction) => onAction(action);

  return (
    <_inputSection>
      <_title>{props.name}</_title>
      <_inputComponent {...props}>
        <_input
          {...props}
          {...register(props.name)}
          statusTypes={status}
          type={isHiddenText ? 'password' : 'text'}
          placeholder={props.placeHolder}
          onFocus={() => dispatchAction(EnumInputAction.FOCUS)}
          onBlur={() => dispatchAction(EnumInputAction.ENABLE)}
        />
        {props.isHiddenIcon && (
          <_icon
            {...props}
            onClick={() => setIsHiddenText((current) => !current)}
          >
            {isHiddenText ? <NonePreview /> : <Preview />}
          </_icon>
        )}
      </_inputComponent>
      {errors && <_errorMessage>ERROR MESSAGE</_errorMessage>}
    </_inputSection>
  );
};

const _inputSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const _title = styled.h1`
  font-weight: ${Weight.regular}px;
  font-size: 14px;
  padding-left: 7px;
  margin-bottom: 7px;
`;
const _inputComponent = styled.div<PropsType>`
  position: relative;
  max-width: ${({ width = 400 }) => width}px;
  height: ${({ height = 46 }) => height}px;
`;
const _input = styled.input<PropsType>`
  width: ${({ width = 400 }) => width}px;
  height: ${({ height = 46 }) => height}px;
  padding-left: 20px;
  border: 2px solid
    ${({ statusTypes }) => getBorderColorWithStatus(statusTypes)};
  border-radius: 4px;
  color: ${Colors.gray300};
`;
const _errorMessage = styled.span`
  color: ${Colors.error};
  font-weight: ${Weight.regular};
  font-size: 14px;
  line-height: 22px;
`;
const _icon = styled.button<PropsType>`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 2px;
  background-color: white;
  width: 64px;
`;
