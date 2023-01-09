import { EnumInputAction, EnumInputStatus } from './@type';
import { Dispatch, SetStateAction } from 'react';

const onAction = ({
  action,
  ...props
}: {
  action: EnumInputAction;
  [key: string]: any;
}) => {
  const setStatus = props.setButtonProps as Dispatch<
    SetStateAction<EnumInputStatus>
  >;
  switch (action) {
    case EnumInputAction.ENABLE:
      setStatus(EnumInputStatus.ENABLE);
    case EnumInputAction.FOCUS:
      setStatus(EnumInputStatus.FOCUS);
    case EnumInputAction.ERROR:
      setStatus(EnumInputStatus.ERROR);
  }
};
export const dispatchAction = ({
  action,
  ...props
}: {
  action: EnumInputAction;
  [key: string]: any;
}) => onAction({ action, ...props });
