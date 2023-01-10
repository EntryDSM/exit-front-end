import { DispatchActionResponse } from './@type';

export const onAction = ({
  action,
  mutateButtonPropsSetter,
  ...props
}: DispatchActionResponse) => {
  mutateButtonPropsSetter((current) => {
    return {
      ...current,
      currentStatus: action,
    };
  });
};
export const dispatchAction = ({ action, ...props }: DispatchActionResponse) =>
  onAction({ action: action, ...props });
