import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import TmpImage from '@assets/imgs/AuthBgImg.png';
import LeftArrow from '@assets/icon/left-arrow';
import RightArrow from '@assets/icon/right-arrow';
import { NextPage } from 'next';
import Dropdown from '@components/common/dropdown';

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
        margin={['13.131vh', '0', '5.25vh', '0']}
        justify={'space-between'}
        align={'flex-end'}
      >
        <Layout direction={'column'} gap={'10px'}>
          <Text weight={600} fontSize={'1.5rem'}>
            학생 관리
          </Text>
          <Text weight={100} fontSize={'1.25rem'}>
            학생을 관리해보세요.
          </Text>
        </Layout>
      </Layout>
      <Layout direction={'row'} margin={['0', '0', '2.62vh', '0']} gap={'20px'}>
        <Dropdown
          selectModels={[
            { name: '1학년' },
            { name: '2학년' },
            { name: '3학년' },
          ]}
          placeholder={'학년'}
          width={'10.834vw'}
        />
        <Dropdown
          selectModels={[
            { name: '1반' },
            { name: '2반' },
            { name: '3반' },
            { name: '4반' },
          ]}
          placeholder={'반'}
          width={'10.834vw'}
        />
        <Dropdown
          selectModels={[
            { name: '공개' },
            { name: '제출' },
            { name: '미제출' },
          ]}
          placeholder={'문서상태'}
          width={'10.834vw'}
        />
      </Layout>
      <Layout
        direction={'column'}
        gap={'20px'}
        height={'55.5vh'}
        overflow={'scroll'}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
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
              <Layout height={'6.8vh'} width={'0'} />
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
              <Text weight={500} fontSize={'1rem'} margin={[0, 87, 0, 20]}>
                기업 이름
              </Text>
              <Text weight={400}>{1300 + i}</Text>
            </Layout>
            <Layout direction={'row'} align={'center'}>
              <Text weight={400} margin={[0, 193, 0, 0]}>
                공개
              </Text>
              <Text
                weight={400}
                color={i % 2 == 0 ? 'focus' : 'gray300'}
                fontSize={'1rem'}
                margin={[0, 139, 0, 0]}
              >
                피드백 {i}
              </Text>
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
        margin={['6.56vh', '0', '0', '0']}
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
