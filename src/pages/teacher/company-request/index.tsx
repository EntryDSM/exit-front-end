import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Input } from '@components/common/input';
import Search from '@assets/icon/search';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import TmpImage from '@assets/imgs/AuthBgImg.png';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';
import LeftArrow from '@assets/icon/left-arrow';
import RightArrow from '@assets/icon/right-arrow';
import { NextPage } from 'next';

const Page: NextPage = ({ ...props }) => {
  return (
    <Layout
      height={'100vh'}
      direction={'column'}
      xPadding={'20vw'}
      bgColor={'gray100'}
    >
      <Layout
        direction={'row'}
        margin={[80, 0, 80, 0]}
        justify={'space-between'}
        align={'flex-end'}
      >
        <Layout direction={'column'} gap={'10px'}>
          <Text weight={600} fontSize={'1.5rem'}>
            기업 요청 리스트
          </Text>
          <Text weight={100} fontSize={'1.25rem'}>
            승인 대기 중
          </Text>
        </Layout>
        <Layout direction={'row'} align={'center'} position={'relative'}>
          <Input
            name={''}
            width={'33vw'}
            placeHolder={'검색할 회사 이름을 입력해주세요.'}
            border={'2px solid white'}
          />
          <Layout position={'absolute'} right={'20px'} top={'20px'}>
            <Search width={18} height={18} fillColor={Colors.gray300} />
          </Layout>
        </Layout>
      </Layout>
      <Layout
        direction={'column'}
        gap={'20px'}
        height={'55.5vh'}
        overflow={'scroll'}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Layout
            key={i}
            height={'6.8vh'}
            justify={'space-between'}
            bgColor={'gray50'}
            direction={'row'}
            align={'center'}
            borderRadius={'6px'}
          >
            <Layout direction={'row'} align={'center'}>
              <Layout
                bgColor={'gray300'}
                width={'10px'}
                height={'6.8vh'}
                borderRadius={'6px 0 0 6px'}
              />
              <Image
                src={TmpImage}
                alt={'none'}
                style={{
                  width: '3.02vh',
                  height: '3.02vh',
                  borderRadius: '90px',
                  marginLeft: '2.08vw',
                }}
              />
              <Text weight={500} fontSize={'1rem'} margin={[0, 0, 0, 20]}>
                기업 이름
              </Text>
            </Layout>
            <Layout direction={'row'} align={'center'}>
              <Text weight={400} color={'gray300'} fontSize={'1rem'}>
                010-0000-0000
              </Text>
              <Button
                btnKinds={ButtonKinds.YES}
                height={'4.52vh'}
                width={'4.16vw'}
                margin={[0, 20, 0, 43]}
              >
                승인
              </Button>
              <Button
                btnKinds={ButtonKinds.NO}
                height={'4.52vh'}
                width={'4.16vw'}
                margin={[0, 40, 0, 0]}
              >
                거절
              </Button>
            </Layout>
          </Layout>
        ))}
      </Layout>
      <Layout
        direction={'row'}
        justify={'space-between'}
        align={'center'}
        width={'31.25vw'}
        height={'3.6vh'}
        bgColor={'gray50'}
        borderRadius={'6px'}
        alignSelf={'center'}
        xPadding={'26px'}
        margin={[100, 0, 0, 0]}
      >
        <LeftArrow fillColor={Colors.gray300} width={24} height={24} />
        <Layout direction={'row'} gap={'1vw'}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <Text color={i === 1 ? 'gray800' : 'gray200'}>{i}</Text>
            </div>
          ))}
        </Layout>
        <RightArrow fillColor={Colors.gray300} width={24} height={24} />
      </Layout>
    </Layout>
  );
};

export default Page;
