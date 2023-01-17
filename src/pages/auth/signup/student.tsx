import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';
import LeftArrow from '@assets/icon/left-arrow';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import AuthBgImg from '@assets/imgs/AuthBgImg.png';
import Dropdown from '@components/common/dropdown';
import { Input } from '@components/common/input';

export default function Page() {
  return (
    <Layout width={'100vw'} height={'100vh'} direction={'row'}>
      <Layout position={'relative'} height={'100vh'}>
        <Image src={AuthBgImg} alt={''} style={{ width: '50vw' }} />
        <Layout position={'absolute'} direction={'column'}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="200" rx="100" fill="white" />
          </svg>
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
            gap={8}
            justify={'center'}
            minHeight={24}
          >
            <Text weight={600} fontSize={30}>
              회원가입
            </Text>
            <Layout direction={'row'} align={'center'}>
              <LeftArrow width={24} height={24} fillColor={Colors.gray400} />
              <Text>Back</Text>
            </Layout>
          </Layout>
          <Layout
            direction={'column'}
            gap={30}
            margin={[80, 0, 74, 0]}
            as="form"
          >
            <Input
              name={'이름'}
              placeHolder={'이름을 입력해주세요.'}
              width={450}
            />
            <Dropdown
              title={'학년'}
              width={450}
              // TODO : refactor
              selectModels={[
                { name: '1학년' },
                { name: '2학년' },
                { name: '3학년' },
              ]}
              name={'학년'}
            />
            <Dropdown
              title={'반'}
              width={450}
              // TODO : refactor
              selectModels={[
                { name: '1반' },
                { name: '2반' },
                { name: '3반' },
                { name: '4반' },
              ]}
              name={'반'}
            />
            <Input name={'번호'} width={450} />
            <Input name={'비밀번호'} width={450} hasHiddenIcon={true} />
          </Layout>
          <Button btnKinds={ButtonKinds.CONTAINED} width={450}>
            다음
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
}
