import { useState } from 'react';
import { PropsType } from './@type';
import Preview from '../../../assets/icon/preview';
import NonePreview from '../../../assets/icon/none-preview';
import {
  _ErrorMessage,
  _Icon,
  _Input,
  _InputComponent,
  _InputSection,
  _Title,
} from './style';

export const Input = ({ ...props }: PropsType) => {
  const [hasHiddenIcon, setHasHiddenIcon] = useState(props.hasHiddenIcon);
  const [toggleIcon, setToggleIcon] = useState(
    props.initInputType ? 'text' : hasHiddenIcon
  );
  return (
    <_InputSection>
      <_Title>{props.name}</_Title>
      <_InputComponent {...props} width={props.width} height={props.height}>
        <_Input
          width={props.width}
          height={props.height}
          type={toggleIcon ? 'password' : 'text'}
          placeholder={props.placeHolder}
          error={props.error}
          {...props}
        />
        {hasHiddenIcon ? (
          <_Icon onClick={() => setToggleIcon((current) => !current)}>
            {toggleIcon ? <Preview /> : <NonePreview />}
          </_Icon>
        ) : null}
      </_InputComponent>
      {props.error && <_ErrorMessage>{props.error}</_ErrorMessage>}
    </_InputSection>
  );
};
