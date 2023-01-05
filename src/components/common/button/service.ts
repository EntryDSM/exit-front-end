import {
  ButtonKinds,
  ButtonStatus,
  IButtonProps,
  IButtonStatus,
  IPropsType,
} from './type';
import {
  containedConfig,
  outlinedConfig,
  roundedConfig,
  textConfig,
  underlineConfig,
} from './model';
import { Dispatch, SetStateAction } from 'react';

export const onAction = ({
  action,
  ...props
}: {
  action: ButtonStatus;
  [key: string]: any;
}) => {
  const setButtonProps = props.setButtonProps as Dispatch<
    SetStateAction<IButtonProps>
  >;
  setButtonProps((current) => {
    return {
      ...current,
      currentStatus: action,
    };
  });
};
export const dispatchAction = ({
  action,
  ...props
}: {
  action: ButtonStatus;
  [key: string]: any;
}) => onAction({ action: action, ...props });

export const getButtonPropsByKinds = (
  type: ButtonKinds,
  { ...props }: IPropsType
): IButtonStatus => {
  switch (type) {
    case ButtonKinds.UNDERLINE:
      return underlineConfig;
    case ButtonKinds.ROUNDED:
      return roundedConfig;
    case ButtonKinds.TEXT:
      return textConfig;
    case ButtonKinds.CONTAINED:
      return containedConfig;
    case ButtonKinds.OUTLINED:
      return outlinedConfig;
  }
};
