import { _checkbox } from './style';
import { CheckboxProps, CheckboxStatus, PropsType } from './@type';
import { useState } from 'react';
import { dispatchAction } from './action';
import { checkBoxConfig } from './model';
import { getCheckboxStyleByStatus } from './service';

function _checkIcon({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg
      width={width ?? '14'}
      height={height ?? '10'}
      viewBox="0 0 14 10"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.2L5.14222 9L13 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Checkbox({ ...props }: PropsType) {
  const [checkBoxProps, setCheckBoxProps] = useState<CheckboxProps>({
    ...props,
    checkboxStatus: checkBoxConfig,
    currentStatus: props.initStatus ?? CheckboxStatus.ENABLED_UNSELECTED,
  });
  const [toggleSelect, setToggleSelect] = useState(true);
  return (
    <>
      <_checkbox
        type="checkbox"
        id="input"
        onMouseOver={() => {
          if (checkBoxProps.currentStatus === CheckboxStatus.ENABLED_SELECTED)
            return;
          dispatchAction({
            action: CheckboxStatus.HOVER,
            mutateCheckboxPropsSetter: setCheckBoxProps,
          });
        }}
        onMouseLeave={() => {
          if (checkBoxProps.currentStatus === CheckboxStatus.ENABLED_SELECTED)
            return;
          dispatchAction({
            action: CheckboxStatus.ENABLED_UNSELECTED,
            mutateCheckboxPropsSetter: setCheckBoxProps,
          });
        }}
        onClick={() => {
          // TODO Refactor
          dispatchAction({
            action: toggleSelect
              ? CheckboxStatus.ENABLED_SELECTED
              : CheckboxStatus.ENABLED_UNSELECTED,
            mutateCheckboxPropsSetter: setCheckBoxProps,
          });
          setToggleSelect((current) => !current);
        }}
        {...checkBoxProps}
        // TODO : Refactor
        disabled={
          props.initStatus === 'DISABLED_SELECTED' ||
          props.initStatus === 'DISABLED_UNSELECTED'
        }
      />
      <label htmlFor="input">
        <_checkIcon
          width={Number(checkBoxProps.width) / 1.5}
          height={Number(checkBoxProps.height) / 0.3}
          fill={getCheckboxStyleByStatus({
            checkboxStatus: checkBoxProps.checkboxStatus,
            currentStatus: checkBoxProps.currentStatus,
            mutateStyle: 'fillColor',
          })}
        />
      </label>
    </>
  );
}

export default Checkbox;
