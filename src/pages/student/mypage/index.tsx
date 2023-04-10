import { Layout } from '@components/common/layout';
import Image from 'next/image';
import TmpImg from '@assets/imgs/AuthBgImg.png';
import { Text } from '@components/common/text';
import { Weight } from '@styles/theme/weight';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';

export default function Page() {
  return (
    <Layout direction={'column'} bgColor={'gray100'}>
      <Layout
        bgColor={'gray800'}
        width={'100vw'}
        height={'440px'}
        position={'absolute'}
        zIndex={0}
      ></Layout>
      <Layout
        bgColor={'gray50'}
        width={'58.34vw'}
        height={'481px'}
        margin={['300px', '0', '0', '300px']}
        zIndex={1}
        borderRadius={'15px'}
        position={'relative'}
        xPadding={'160px'}
      >
        <Layout
          direction={'row'}
          position={'absolute'}
          top={'-80px'}
          left={'80px'}
        >
          <Image
            src={TmpImg}
            alt={''}
            style={{
              borderRadius: '90px',
              width: '160px',
              height: '160px',
            }}
          />
          <Layout direction={'column'} position={'relative'} left={'30px'}>
            <Text weight={Weight.semiBold} color={'gray50'} fontSize={30}>
              최승우
            </Text>
            <Text weight={400} color={'gray300'} fontSize={20}>
              Frontend
            </Text>
          </Layout>
        </Layout>
        <Layout
          width={'2px'}
          height={'80px'}
          bgColor={'gray200'}
          position={'absolute'}
          top={'100px'}
        ></Layout>
        <Layout position={'relative'} left={'110px'} top={'46px'} gap={'24px'}>
          <Text weight={500} fontSize={17}>
            1학년 3반 18번
          </Text>
          <Text weight={500} fontSize={17}>
            xxx@gmail.com
          </Text>
          <Text weight={500} fontSize={17}>
            010-0000-0000
          </Text>
        </Layout>
        <Layout margin={['110px', '0', '0', '0']} gap={'40px'}>
          <Text weight={500} fontSize={20}>
            안녕하세요 Frontend Developer 최승우입니다.
          </Text>
          <Text weight={400} fontSize={17} color={'gray400'}>
            문제파악부터 설계, 평가까지 복잡한 프로세스를 거쳐 만든 프로그램이
            좋은 평가를 받을 때, 그 어떤 일보다 큰 성취감을 느낍니다. 읽기 쉬운
            코드, 모듈화가 쉬운 코드를 지향하며 꾸준히 성장하는 개발자가
            되고싶습니다.
          </Text>
        </Layout>
      </Layout>
      <Layout margin={['120px', '0', '0', '0']} xPadding={'20.833vw'}>
        <Text weight={600} fontSize={30} margin={['0', '0', '86px', '0']}>
          레주메
        </Text>
        <Layout
          width={'58.34vw'}
          height={'190px'}
          bgColor={'gray50'}
          borderRadius={'15px'}
          justify={'center'}
          align={'center'}
          position={'relative'}
        >
          <Layout
            width={'50vw'}
            height={'2px'}
            bgColor={'gray900'}
            position={'absolute'}
          ></Layout>
          <Layout direction={'row'} width={'37.5vw'} justify={'space-between'}>
            <Layout position={'relative'} top={'15px'} align={'center'}>
              <Layout
                width={'30px'}
                height={'30px'}
                bgColor={'gray900'}
                borderRadius={'90px'}
                position={'relative'}
              ></Layout>
              <Text margin={['15px', '0', '0', '0']}>제출</Text>
            </Layout>
            <Layout position={'relative'} top={'15px'} align={'center'}>
              <Layout
                width={'30px'}
                height={'30px'}
                bgColor={'gray900'}
                borderRadius={'90px'}
                position={'relative'}
              ></Layout>
              <Text margin={['15px', '0', '0', '0']}>검토중</Text>
            </Layout>
            <Layout position={'relative'} top={'15px'} align={'center'}>
              <Layout
                width={'30px'}
                height={'30px'}
                bgColor={'gray900'}
                borderRadius={'90px'}
                position={'relative'}
              ></Layout>
              <Text margin={['15px', '0', '0', '0']}>공유됨</Text>
            </Layout>
          </Layout>
        </Layout>
        <Layout
          width={'58.34vw'}
          minHeight={'896px'}
          bgColor={'gray50'}
          margin={['20px', '0', '200px', '0']}
          borderRadius={'15px'}
          xPadding={'4.16vw'}
          yPadding={'60px'}
        >
          <Text weight={500} fontSize={22}>
            피드백
          </Text>
          <Layout
            height={'624px'}
            overflow={'hidden'}
            gap={'40px'}
            margin={[40, 0, 0, 0]}
          >
            <Layout
              width={'50vw'}
              height={'230px'}
              bgColor={'gray100'}
              borderRadius={'15px'}
              xPadding={'60px'}
              justify={'center'}
            >
              <Text weight={500} fontSize={20}>
                프로젝트 이름
              </Text>
              <Text weight={400} fontSize={17} margin={[30, 0, 0, 0]}>
                프로젝트에서 한 경험이나 그 프로젝트를 통해 배우거나 느낀점을
                사례 중심으로 자세하게 적어주면 좋을 것 같아요. 그냥 ~~했다 라는
                식으로 적고 끝내면 친구가 그 프로젝트를 통해 어떤 것을 얻었는지,
                어떻게 성장하게 되었는지를 알 수 없어서 그 부분을 더
                추가해주세요.
              </Text>
            </Layout>
            <Layout
              width={'50vw'}
              height={'230px'}
              bgColor={'gray100'}
              borderRadius={'15px'}
              xPadding={'60px'}
              justify={'center'}
            >
              <Text weight={500} fontSize={20}>
                프로젝트 이름
              </Text>
              <Text weight={400} fontSize={17} margin={[30, 0, 0, 0]}>
                프로젝트에서 한 경험이나 그 프로젝트를 통해 배우거나 느낀점을
                사례 중심으로 자세하게 적어주면 좋을 것 같아요. 그냥 ~~했다 라는
                식으로 적고 끝내면 친구가 그 프로젝트를 통해 어떤 것을 얻었는지,
                어떻게 성장하게 되었는지를 알 수 없어서 그 부분을 더
                추가해주세요.
              </Text>
            </Layout>
            <Layout
              width={'50vw'}
              height={'230px'}
              bgColor={'gray100'}
              borderRadius={'15px'}
              xPadding={'60px'}
              justify={'center'}
            >
              <Text weight={500} fontSize={20}>
                프로젝트 이름
              </Text>
              <Text weight={400} fontSize={17} margin={[30, 0, 0, 0]}>
                프로젝트에서 한 경험이나 그 프로젝트를 통해 배우거나 느낀점을
                사례 중심으로 자세하게 적어주면 좋을 것 같아요. 그냥 ~~했다 라는
                식으로 적고 끝내면 친구가 그 프로젝트를 통해 어떤 것을 얻었는지,
                어떻게 성장하게 되었는지를 알 수 없어서 그 부분을 더
                추가해주세요.
              </Text>
            </Layout>
          </Layout>
          <Layout
            alignSelf={'flex-end'}
            direction={'row'}
            gap={'20px'}
            margin={[40, 0, 0, 0]}
          >
            <Button btnKinds={ButtonKinds.ROUNDED}>미리보기</Button>
            <Button btnKinds={ButtonKinds.ROUNDED} width={140}>
              내 이력서 관리하기
            </Button>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
