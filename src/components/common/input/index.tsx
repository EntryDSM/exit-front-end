import { useRef, useState } from 'react';
import { PropsType } from './@type';
import Preview from '../../../assets/icon/preview';
import NonePreview from '../../../assets/icon/none-preview';
import {
  _ErrorMessage,
  _grayInput,
  _Icon,
  _Input,
  _InputComponent,
  _InputSection,
  _MaxLength,
  _Title,
  _UnderWrapper,
} from './style';

export const Input = ({ ...props }: PropsType) => {
  const [hasHiddenIcon, setHasHiddenIcon] = useState(props.hasHiddenIcon);
  const [toggleIcon, setToggleIcon] = useState(
    props.initInputType ? 'text' : hasHiddenIcon
  );
  const ref = useRef<HTMLInputElement>();
  const [length, setLength] = useState<number>(0);
  return (
    <_InputSection>
      <_Title>{props.name}</_Title>
      <_InputComponent {...props} width={props.width} height={props.height}>
        {props.kindOfInput === 'default' ? (
          <_Input
            type={toggleIcon ? 'password' : 'text'}
            placeholder={props.placeHolder}
            error={props.error}
            onChange={() => setLength(ref.current?.value.length)}
            ref={ref}
            {...props}
          />
        ) : (
          <_grayInput
            type={toggleIcon ? 'password' : 'text'}
            placeholder={props.placeHolder}
            error={props.error}
            onChange={() => setLength(ref.current?.value.length)}
            ref={ref}
            as={props.inputAs ?? 'input'}
            {...props}
          />
        )}
        {hasHiddenIcon ? (
          <_Icon onClick={() => setToggleIcon((current) => !current)}>
            {toggleIcon ? <Preview /> : <NonePreview />}
          </_Icon>
        ) : null}
      </_InputComponent>
      <_UnderWrapper>
        {props.error && <_ErrorMessage>{props.error}</_ErrorMessage>}
        {props.maxLength && (
          <_MaxLength>
            {length}/{props.maxLength}
          </_MaxLength>
        )}
      </_UnderWrapper>
    </_InputSection>
  );
};
