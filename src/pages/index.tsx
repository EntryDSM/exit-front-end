import { Button } from '../components/common/button';
import { ButtonKinds, ButtonStatus } from '../components/common/button/@type';
import PlusIcon from '../assets/icon/plus';
import styled from '@emotion/styled';
import Checkbox from '../components/common/checkbox';

const TestContainer = styled.div`
  display: flex;
`;
export default function Home() {
  return <Checkbox />;
}

function sample() {
  return (
    <>
      <h1>Button Design System</h1>
      <TestContainer>
        <div>
          <h2>Enabled</h2>
          <h3>Contained</h3>
          <Button
            btnKinds={ButtonKinds.CONTAINED}
            initStatus={ButtonStatus.WITH_ICON}
            icon={PlusIcon}
          >
            Button
          </Button>
          <h3>Outlined</h3>
          <Button btnKinds={ButtonKinds.OUTLINED}>Button</Button>
          <h3>underline</h3>
          <Button btnKinds={ButtonKinds.UNDERLINE}>Button</Button>
          <h3>Rounded</h3>
          <Button btnKinds={ButtonKinds.ROUNDED}>Button</Button>
          <h3>Text</h3>
          <Button btnKinds={ButtonKinds.TEXT}>Button</Button>
        </div>
        <div>
          <h2>Disabled</h2>
          <h3>Contained</h3>
          <Button
            btnKinds={ButtonKinds.CONTAINED}
            initStatus={ButtonStatus.DISABLED}
          >
            Button
          </Button>
          <h3>Outlined</h3>
          <Button
            btnKinds={ButtonKinds.OUTLINED}
            initStatus={ButtonStatus.DISABLED}
          >
            Button
          </Button>
          <h3>underline</h3>
          <Button
            btnKinds={ButtonKinds.UNDERLINE}
            initStatus={ButtonStatus.DISABLED}
          >
            Button
          </Button>
          <h3>Rounded</h3>
          <Button
            btnKinds={ButtonKinds.ROUNDED}
            initStatus={ButtonStatus.DISABLED}
          >
            Button
          </Button>
          <h3>Text</h3>
          <Button
            btnKinds={ButtonKinds.TEXT}
            initStatus={ButtonStatus.DISABLED}
          >
            Button
          </Button>
        </div>
      </TestContainer>
    </>
  );
}
