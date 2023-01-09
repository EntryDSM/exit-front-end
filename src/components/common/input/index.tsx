import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Preview from '../../../assets/icon/preview.svg';
import NonePreview from '../../../assets/icon/non-preview.svg';
import { EnumInputAction, PropsType } from './@type';
import * as _ from './style';
import { dispatchAction } from './action';

export const Input = ({ ...props }: PropsType) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(props.statusTypes);
  const [isHiddenText, setIsHiddenText] = useState(false);

  return (
    <_.inputSection>
      <_.title>{props.name}</_.title>
      <_.inputComponent {...props}>
        <_.input
          {...props}
          {...register(props.name)}
          statusTypes={status}
          type={isHiddenText ? 'password' : 'text'}
          placeholder={props.placeHolder}
          onFocus={() =>
            dispatchAction({ action: EnumInputAction.FOCUS, setStatus })
          }
          onBlur={() =>
            dispatchAction({ action: EnumInputAction.ENABLE, setStatus })
          }
          as={props.as ?? 'input'}
        />
        {props.isHiddenIcon && (
          <_.icon
            {...props}
            onClick={() => setIsHiddenText((current) => !current)}
          >
            {isHiddenText ? <NonePreview /> : <Preview />}
          </_.icon>
        )}
      </_.inputComponent>
      {errors && <_.errorMessage>ERROR MESSAGE</_.errorMessage>}
    </_.inputSection>
  );
};
