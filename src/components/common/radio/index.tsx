import { _radio } from './style';
import { PropsType, RadioProps, RadioStatus } from './@type';
import { useState } from 'react';
import { dispatchAction } from './action';
import { radioConfig } from './model';

function Radio({ ...props }: PropsType) {
  const [radioProps, setRadioProps] = useState<RadioProps>({
    ...props,
    radioStatus: radioConfig,
    currentStatus: props.initStatus ?? RadioStatus.ENABLED_UNSELECTED,
  });
  const [toggleSelect, setToggleSelect] = useState(true);
  return (
    <>
      <_radio
        type="radio"
        id="radio"
        onMouseOver={() => {
          if (radioProps.currentStatus === RadioStatus.ENABLED_SELECTED) return;
          dispatchAction({
            action: RadioStatus.HOVER,
            mutateCheckboxPropsSetter: setRadioProps,
          });
        }}
        onMouseLeave={() => {
          if (radioProps.currentStatus === RadioStatus.ENABLED_SELECTED) return;
          dispatchAction({
            action: RadioStatus.ENABLED_UNSELECTED,
            mutateCheckboxPropsSetter: setRadioProps,
          });
        }}
        onClick={() => {
          // TODO Refactor
          dispatchAction({
            action: toggleSelect
              ? RadioStatus.ENABLED_SELECTED
              : RadioStatus.ENABLED_UNSELECTED,
            mutateCheckboxPropsSetter: setRadioProps,
          });
          setToggleSelect((current) => !current);
        }}
        {...radioProps}
        // TODO : Refactor
        disabled={
          props.initStatus === 'DISABLED_SELECTED' ||
          props.initStatus === 'DISABLED_UNSELECTED'
        }
      />
      <label htmlFor="radio">
        {radioProps.currentStatus === RadioStatus.ENABLED_SELECTED ? (
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: 'black',
              borderRadius: '90px',
            }}
          />
        ) : null}
      </label>
    </>
  );
}

export default Radio;
