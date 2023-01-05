import { ButtonStatus, IButtonProps, IButtonStatus, IPropsType } from './type';
import { dispatchAction, getButtonPropsByKinds } from './service';
import { _button } from './style';
import { useState } from 'react';

/***
 * @param btnKinds ButtonKind(Enum) 타입으로 작성해야 합니다.
 */
export const Button = ({ ...props }: IPropsType) => {
  const buttonStatusProps: IButtonStatus = getButtonPropsByKinds(
    props.btnKinds,
    { ...props }
  );
  const [buttonProps, setButtonProps] = useState<IButtonProps>({
    ...props,
    buttonStatus: buttonStatusProps,
    currentStatus: props.initStatus ?? ButtonStatus.ENABLED,
  });
  return (
    <_button
      {...buttonProps}
      disabled={buttonProps.currentStatus === ButtonStatus.DISABLED}
      onMouseOver={() =>
        dispatchAction({ action: ButtonStatus.HOVER, setButtonProps })
      }
      onMouseLeave={() =>
        dispatchAction({ action: ButtonStatus.ENABLED, setButtonProps })
      }
      onMouseDown={() =>
        dispatchAction({ action: ButtonStatus.PRESSED, setButtonProps })
      }
    >
      {buttonProps.children}
    </_button>
  );
};
