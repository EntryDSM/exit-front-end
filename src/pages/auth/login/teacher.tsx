import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';
import LeftArrow from '@assets/icon/left-arrow';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import AuthBgImg from '@assets/imgs/AuthBgImg.png';
import { Input } from '@components/common/input';
import Logo from '@assets/icon/logo';
import RightArrow from '@assets/icon/right-arrow';
import Checkbox from '@components/common/checkbox';
import Link from 'next/link';

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
          <Logo height={63} width={100} />
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
              선생님 로그인
            </Text>
            <Layout direction={'row'} align={'center'}>
              <LeftArrow width={24} height={24} fillColor={Colors.gray400} />
              <Text color={'gray400'}>Back</Text>
            </Layout>
          </Layout>
          <Layout direction={'column'} gap={'30px'} margin={[80, 0, 62, 0]}>
            <Input
              name={'이메일'}
              placeHolder={'이메일을 입력해주세요.'}
              initInputType={'email'}
              width={450}
            />
            <Input
              name={'비밀번호'}
              width={450}
              hasHiddenIcon={true}
              placeHolder={'비밀번호를 입력해주세요.'}
            />
          </Layout>
          <Layout direction={'row'} align={'center'} margin={[0, 0, 216, 0]}>
            <Text>비밀번호를 잊어버리셨나요?</Text>
            <Layout direction={'row'} align={'center'} margin={[0, 0, 0, 20]}>
              <Text weight={500} fontSize={17} color={'check'}>
                비밀번호 찾기
              </Text>
              <RightArrow fillColor={Colors.check} width={24} height={24} />
            </Layout>
          </Layout>
          <Layout direction={'row'} align={'center'} margin={[0, 0, 22, 0]}>
            <Checkbox />
            <Text margin={[0, 0, 0, 12]}>아이디 저장</Text>
          </Layout>
          <Button btnKinds={ButtonKinds.CONTAINED} width={450}>
            다음
          </Button>
          <Layout direction={'row'} align={'center'} margin={[21, 0, 0, 0]}>
            <Text fontSize={17}>계정이 없으신가요?</Text>
            <Link href={'/auth/signup/company'}>
              <Layout direction={'row'} align={'center'} margin={[0, 0, 0, 21]}>
                <Text weight={500} fontSize={17} color={'check'}>
                  회원가입
                </Text>
                <RightArrow fillColor={Colors.check} width={24} height={24} />
              </Layout>
            </Link>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
