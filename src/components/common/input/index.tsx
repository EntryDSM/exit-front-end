import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const {
    register,
    formState: { errors },
    setError,
  } = useForm();
  const [hasHiddenIcon, setHasHiddenIcon] = useState(props.hasHiddenIcon);
  const [toggleIcon, setToggleIcon] = useState(true);
  return (
    <_InputSection>
      <_Title>{props.name}</_Title>
      <_InputComponent {...props} width={props.width} height={props.height}>
        <_Input
          {...register(props.name, {
            required: {
              value: true,
              message: '꼭 입력해야 합니다.',
            },
          })}
          width={props.width}
          height={props.height}
          type={toggleIcon ? 'password' : 'text'}
          placeholder={props.placeHolder}
          error={errors[props.name]?.message as string}
        />
        {hasHiddenIcon ? (
          <_Icon onClick={() => setToggleIcon((current) => !current)}>
            {toggleIcon ? <Preview /> : <NonePreview />}
          </_Icon>
        ) : null}
      </_InputComponent>
      {(errors[props.name]?.message as string) && (
        <_ErrorMessage>{errors[props.name]?.message as string}</_ErrorMessage>
      )}
    </_InputSection>
  );
};
