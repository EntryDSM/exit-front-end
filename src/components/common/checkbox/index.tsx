import { _input } from './style';
import { PropsType } from './@type';

function Checkbox({ ...props }: PropsType) {
  return (
    <>
      <_input type="checkbox" id="input" />
      <label htmlFor="input"></label>
    </>
  );
}

export default Checkbox;
