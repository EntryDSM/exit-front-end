import { Button } from '../components/common/button';
import { ButtonKinds } from '../components/common/button/type';

export default function Home() {
  return (
    <>
      <h1>Contained</h1>
      <Button btnKinds={ButtonKinds.CONTAINED}>Button</Button>
      <h1>Outlined</h1>
      <Button btnKinds={ButtonKinds.OUTLINED}>Button</Button>
      <h1>underline</h1>
      <Button btnKinds={ButtonKinds.UNDERLINE}>Button</Button>
      <h1>Rounded</h1>
      <Button btnKinds={ButtonKinds.ROUNDED}>Button</Button>
      <h1>Text</h1>
      <Button btnKinds={ButtonKinds.TEXT}>Button</Button>
    </>
  );
}
