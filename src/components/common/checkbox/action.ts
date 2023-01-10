import { DispatchActionResponse } from './@type';

export const dispatchAction = ({
  action,
  mutateCheckboxPropsSetter,
  ...props
}: DispatchActionResponse) => {
  console.log(action);
  onAction({
    action,
    mutateCheckboxPropsSetter: mutateCheckboxPropsSetter,
  });
};
const onAction = ({
  action,
  mutateCheckboxPropsSetter,
  ...props
}: DispatchActionResponse) => {
  mutateCheckboxPropsSetter((current) => {
    return {
      ...current,
      currentStatus: action,
    };
  });
};
