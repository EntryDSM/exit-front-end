import { DispatchActionResponse } from './@type';

export const onAction = ({
  action,
  mutationButtonPropsSetter,
  ...props
}: DispatchActionResponse) => {
  mutationButtonPropsSetter((current) => {
    return {
      ...current,
      currentStatus: action,
    };
  });
};
export const dispatchAction = ({ action, ...props }: DispatchActionResponse) =>
  onAction({ action: action, ...props });
