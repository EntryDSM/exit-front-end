import { EnumInputAction, EnumInputStatus } from './type';
import { Colors } from '../../../styles/theme/color';
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

export const getBorderColorWithStatus = (status: EnumInputStatus) => {
  switch (status) {
    case EnumInputStatus.ENABLE:
      return Colors.gray800;
    case EnumInputStatus.FOCUS:
      return Colors.check;
    case EnumInputStatus.ERROR:
      return Colors.error;
  }
};
