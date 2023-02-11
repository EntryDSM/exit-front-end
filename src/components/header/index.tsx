import { Layout } from '@components/common/layout';
import { HeaderProps } from '@components/header/@types';
import Logo from '@assets/icon/icon';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import TmpImg from '@assets/imgs/AuthBgImg.png';
import { Text } from '@components/common/text';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header({ pathname, ...props }: HeaderProps) {
  const router = useRouter();
  const currentPath = router.asPath.replace('/teacher/', '');
  return (
    <Layout
      direction={'row'}
      align={'center'}
      bgColor={'gray900'}
      height={'80px'}
      width={'100vw'}
      position={'fixed'}
      xPadding={'13.542vw'}
      justify={'space-between'}
    >
      <Layout direction={'row'}>
        <Logo fillColor={Colors.gray50} />
        <TeacherHeader currentPath={currentPath} />
      </Layout>
      <Image
        src={TmpImg}
        alt={''}
        style={{ width: '40px', height: '40px', borderRadius: '90px' }}
      />
    </Layout>
  );
}

function TeacherHeader({ currentPath }: { currentPath: string }) {
  return (
    <Layout
      direction={'row'}
      align={'center'}
      gap={'3.125vw'}
      margin={['0', '0', '0', '4.03vw']}
    >
      <Text
        weight={currentPath === 'student-manage' ? 500 : 400}
        color={currentPath === 'student-manage' ? 'gray50' : 'gray300'}
      >
        <Link href={'student-manage'}>학생관리</Link>
      </Text>
      <Text
        weight={currentPath === 'company-manage' ? 500 : 400}
        color={currentPath === 'company-manage' ? 'gray50' : 'gray300'}
      >
        <Link href={'company-manage'}>기업관리</Link>
      </Text>
      <Text
        weight={currentPath === 'company-request' ? 500 : 400}
        color={currentPath === 'company-request' ? 'gray50' : 'gray300'}
      >
        <Link href={'company-request'}>전공관리</Link>
      </Text>
    </Layout>
  );
}
