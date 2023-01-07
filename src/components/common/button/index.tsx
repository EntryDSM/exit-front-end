import { ButtonProps, ButtonStatus, IButtonStatus, PropsType } from './type';
import { dispatchAction, getButtonPropsByButtonKinds } from './service';
import { useState } from 'react';
import { _button } from './style';

export const Button = ({ ...props }: PropsType) => {
  const buttonStatusProps: IButtonStatus = getButtonPropsByButtonKinds(
    props.btnKinds,
    { ...props }
  );
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
      {Icon ? Icon({ width: 10, height: 10, fillColor: 'gray50' }) : null}
      {buttonProps.children}
    </_button>
  );
};
