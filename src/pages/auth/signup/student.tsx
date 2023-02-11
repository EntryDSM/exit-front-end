import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';
import LeftArrow from '@assets/icon/left-arrow';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import AuthBgImg from '@assets/imgs/AuthBgImg.png';
import { Input } from '@components/common/input';
import Dropdown from '@components/common/dropdown';
import Logo from '@assets/icon/logo';

export default function Page() {
  return (
    <Layout width={'100vw'} height={'100vh'} direction={'row'}>
      <Layout
        position={'relative'}
        height={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Image src={AuthBgImg} alt={''} style={{ width: '50vw' }} />
        <Layout position={'absolute'} direction={'column'} align={'center'}>
          <Logo />
          <AddProfileButton />
          <Text margin={[20, 0, 0, 0]} color={'gray800'}>
            프로필 추가
          </Text>
        </Layout>
      </Layout>
      <Layout justify={'center'} width={'50vw'} direction={'row'}>
        <Layout
          direction={'column'}
          align={'flex-start'}
          justify={'center'}
          height={'100vh'}
        >
          <Layout
            direction={'column'}
            gap={'8px'}
            justify={'center'}
            minHeight={'24px'}
          >
            <Text weight={600} fontSize={30}>
              회원가입
            </Text>
            <Layout direction={'row'} align={'center'}>
              <LeftArrow width={24} height={24} fillColor={Colors.gray400} />
              <Text>Back</Text>
            </Layout>
          </Layout>
          <Layout direction={'column'} gap={'30px'} margin={[80, 0, 74, 0]}>
            <Input
              name={'이름'}
              placeHolder={'이름을 입력해주세요.'}
              width={450}
            />
            <Dropdown
              name={'학년'}
              width={450}
              placeholder={'학년을 입력해주세요.'}
              // TODO : refactor
              selectModels={[
                { name: '1학년' },
                { name: '2학년' },
                { name: '3학년' },
              ]}
            />
            <Dropdown
              name={'반'}
              width={450}
              placeholder={'반을 입력해주세요.'}
              // TODO : refactor
              selectModels={[
                { name: '1반' },
                { name: '2반' },
                { name: '3반' },
                { name: '4반' },
              ]}
            />
            <Input
              name={'번호'}
              width={450}
              placeHolder={'번호를 입력해주세요.'}
            />
            <Input
              name={'비밀번호'}
              width={450}
              hasHiddenIcon={true}
              placeHolder={'비밀번호를 입력해주세요.'}
            />
          </Layout>
          <Button btnKinds={ButtonKinds.CONTAINED} width={450}>
            다음
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
}

function AddProfileButton() {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: '60px' }}
    >
      <rect width="200" height="200" rx="100" fill="white" />
      <path
        d="M111.667 98.3333H101.667V88.3333C101.667 87.8913 101.491 87.4674 101.178 87.1548C100.866 86.8423 100.442 86.6667 99.9998 86.6667C99.5578 86.6667 99.1339 86.8423 98.8213 87.1548C98.5088 87.4674 98.3332 87.8913 98.3332 88.3333V98.3333H88.3332C87.8911 98.3333 87.4672 98.5089 87.1547 98.8215C86.8421 99.134 86.6665 99.558 86.6665 100C86.6665 100.442 86.8421 100.866 87.1547 101.179C87.4672 101.491 87.8911 101.667 88.3332 101.667H98.3332V111.667C98.3332 112.109 98.5088 112.533 98.8213 112.845C99.1339 113.158 99.5578 113.333 99.9998 113.333C100.442 113.333 100.866 113.158 101.178 112.845C101.491 112.533 101.667 112.109 101.667 111.667V101.667H111.667C112.109 101.667 112.532 101.491 112.845 101.179C113.158 100.866 113.333 100.442 113.333 100C113.333 99.558 113.158 99.134 112.845 98.8215C112.532 98.5089 112.109 98.3333 111.667 98.3333Z"
        fill="#141414"
      />
    </svg>
  );
}
