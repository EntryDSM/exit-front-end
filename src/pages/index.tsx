import { EnumInputStatus, Input } from '../components/common/input';

export default function Home() {
  return (
    <>
      <Input
        name={'Test'}
        color={'gray900'}
        placeHolder={'Hello'}
        statusTypes={EnumInputStatus.ENABLE}
        width={1000}
        height={400}
      />
    </>
  );
}
