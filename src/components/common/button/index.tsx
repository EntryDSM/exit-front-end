import { ButtonProps, ButtonStatus, IButtonStatus, PropsType } from './@type';
import {
  getButtonPropsByButtonKinds,
  getButtonStyleByMutateStyle,
} from './service';
import { useState } from 'react';
import { _button } from './style';
import { dispatchAction } from './action';

export const Button = ({ ...props }: PropsType) => {
  const buttonStatusProps: IButtonStatus<ButtonStatus> =
    getButtonPropsByButtonKinds(props.btnKinds, { ...props });
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    ...props,
    buttonStatus: buttonStatusProps,
    currentStatus: props.initStatus ?? ButtonStatus.ENABLED,
  });
  const { icon: Icon } = props;
  return (
    <_button
      {...buttonProps}
      disabled={buttonProps.currentStatus === ButtonStatus.DISABLED}
      onMouseOver={() =>
        dispatchAction({
          action: ButtonStatus.HOVER,
          mutationButtonPropsSetter: setButtonProps,
        })
      }
      onMouseLeave={() =>
        dispatchAction({
          action: ButtonStatus.ENABLED,
          mutationButtonPropsSetter: setButtonProps,
        })
      }
      onMouseDown={() =>
        dispatchAction({
          action: ButtonStatus.PRESSED,
          mutationButtonPropsSetter: setButtonProps,
        })
      }
      onMouseUp={() =>
        dispatchAction({
          action: ButtonStatus.HOVER,
          mutationButtonPropsSetter: setButtonProps,
        })
      }
    >
      {Icon
        ? Icon({
            width: 10,
            height: 10,
            fillColor: getButtonStyleByMutateStyle({
              currentStatus: buttonProps.currentStatus,
              buttonStatus: buttonProps.buttonStatus,
              mutateStyle: 'fillColor',
            })!,
          })
        : null}
      {buttonProps.children}
    </_button>
  );
};
