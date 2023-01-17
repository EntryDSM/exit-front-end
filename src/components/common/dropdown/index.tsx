import {
  _dropdownSection,
  _dropdownWrapper,
  _selectSection,
  _selectWrapper,
  _Title,
} from './style';
import DownArrow from '../../../assets/icon/down-arrow';
import { Colors } from '../../../styles/theme/color';
import { useState } from 'react';
import UpArrow from '../../../assets/icon/up-arrow';
import { PropsTypes } from './@types';

function Line() {
  return (
    <svg
      width="224"
      height="1"
      viewBox="0 0 224 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="-4.37114e-08" y1="0.5" x2="224" y2="0.49998" stroke="white" />
    </svg>
  );
}

// TODO Refactor
function Dropdown({ ...props }: PropsTypes) {
  const [toggleArrow, setToggleArrow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<string | undefined>(
    props.name
  );
  return (
    <_dropdownSection {...props}>
      {props.title ? <_Title {...props}>{props.title}</_Title> : null}
      <_dropdownWrapper {...props}>
        <p>{currentStatus ?? 'select'}</p>
        <button onClick={() => setToggleArrow((current) => !current)}>
          {toggleArrow ? (
            <DownArrow width={24} height={24} fillColor={Colors.gray800} />
          ) : (
            <UpArrow width={24} height={24} fillColor={Colors.gray800} />
          )}
        </button>
      </_dropdownWrapper>
      {toggleArrow ? (
        <_selectSection {...props}>
          {props.selectModels.map((model) => (
            <div key={Date.now()}>
              <_selectWrapper
                {...props}
                onClick={() => {
                  // TODO refactor
                  setCurrentStatus(model.name);
                  setToggleArrow(false);
                }}
              >
                <p>{model.name}</p>
              </_selectWrapper>
              <Line />
            </div>
          ))}
        </_selectSection>
      ) : null}
    </_dropdownSection>
  );
}

export default Dropdown;
