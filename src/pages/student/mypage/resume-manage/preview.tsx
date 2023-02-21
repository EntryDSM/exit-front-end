import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import Close from '@assets/icon/close';
import { Colors } from '@styles/theme/color';
import Image from 'next/image';
import TmpImg from '@assets/imgs/AuthBgImg.png';

export default function Page() {
  return (
    <Layout direction={'column'} bgColor={'gray50'}>
      <Layout
        bgColor={'gray800'}
        width={'100vw'}
        height={'440px'}
        position={'absolute'}
        zIndex={0}
      ></Layout>
      <Layout
        zIndex={1}
        position={'absolute'}
        left={'20.833vw'}
        top={'200px'}
        right={'20.833vw'}
        direction={'row'}
        justify={'space-between'}
      >
        <Layout>
          <Text weight={600} fontSize={30} color={'gray50'}>
            {' '}
            아력서 관리
          </Text>
          <Text weight={100} fontSize={24} color={'gray50'}>
            Resume Management
          </Text>
          <Layout margin={[34, 0, 0, 0]} gap={'10px'}>
            <Text weight={400} fontSize={14} color={'gray50'}>
              1학년 3반 18번
            </Text>
            <Text weight={400} fontSize={14} color={'gray50'}>
              xxx@gmail.com
            </Text>
            <Text weight={400} fontSize={14} color={'gray50'}>
              010-5678-1234
            </Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout
        direction={'row'}
        zIndex={1}
        margin={['500px', '0', '200px', '20.833vw']}
      >
        <Layout width={'42.7vw'} borderRadius={'15px'} position={'relative'}>
          <Layout>
            <Text weight={500} fontSize={27}>
              안녕하세요 :) 항상 좋은 코드를 만들어나가는 뿌듯함으로 하루하루
              나아가고 있습니다. 👍
            </Text>
            <Text weight={400} fontSize={16} margin={[20, 0, 0, 0]}>
              문제파악부터 설계, 평가까지 복잡한 프로세스를 거쳐 만든 프로그램이
              좋은 평가를 받을 때, 그 어떤 일보다 큰 성취감을 느낍니다. 읽기
              쉬운 코드, 모듈화가 쉬운 코드를 지향하며 꾸준히 성장하는 개발자가
              되고싶습니다.
            </Text>
          </Layout>
          <Layout margin={[100, 0, 0, 0]}>
            <Text weight={500} fontSize={27}>
              기술 스택
            </Text>
            <Layout margin={[30, 0, 40, 0]} direction={'row'} gap={'10px'}>
              <Layout
                bgColor={'gray100'}
                height={'40px'}
                justify={'center'}
                align={'center'}
                xPadding={'20px'}
                borderRadius={'6px'}
                direction={'row'}
                gap={'12px'}
              >
                <Text weight={400} fontSize={17}>
                  React
                </Text>
                <Close fillColor={Colors.gray900} width={12} height={12} />
              </Layout>
              <Layout
                bgColor={'gray100'}
                height={'40px'}
                justify={'center'}
                align={'center'}
                xPadding={'20px'}
                borderRadius={'6px'}
                direction={'row'}
                gap={'12px'}
              >
                <Text weight={400} fontSize={17}>
                  HTML
                </Text>
                <Close fillColor={Colors.gray900} width={12} height={12} />
              </Layout>
              <Layout
                bgColor={'gray100'}
                height={'40px'}
                justify={'center'}
                align={'center'}
                xPadding={'20px'}
                borderRadius={'6px'}
                direction={'row'}
                gap={'12px'}
              >
                <Text weight={400} fontSize={17}>
                  CSS
                </Text>
                <Close fillColor={Colors.gray900} width={12} height={12} />
              </Layout>
              <Layout
                bgColor={'gray100'}
                height={'40px'}
                justify={'center'}
                align={'center'}
                xPadding={'20px'}
                borderRadius={'6px'}
                direction={'row'}
                gap={'12px'}
              >
                <Text weight={400} fontSize={17}>
                  Javascript
                </Text>
                <Close fillColor={Colors.gray900} width={12} height={12} />
              </Layout>
            </Layout>
          </Layout>
          <Layout margin={[100, 0, 0, 0]}>
            <Text weight={500} fontSize={27}>
              프로젝트
            </Text>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Layout direction={'row'}>
                <Image
                  src={TmpImg}
                  alt={''}
                  style={{ width: '80px', height: '80px' }}
                />
                <Layout gap={'10px'} margin={[0, 0, 0, 20]}>
                  <Text weight={600} fontSize={24}>
                    프로젝트 이름
                  </Text>
                  <Text weight={400} fontSize={16}>
                    2022.01.11 ~ 2023.12.31
                  </Text>
                </Layout>
              </Layout>
              <Text margin={[40, 0, 0, 0]} weight={400} fontSize={17}>
                문제파악부터 설계, 평가까지 복잡한 프로세스를 거쳐 만든
                프로그램이 좋은 평가를 받을 때, 그 어떤 일보다 큰 성취감을
                느낍니다. 읽기 쉬운 코드, 모듈화가 쉬운 코드를 지향하며 꾸준히
                성장하는 개발자가 되고싶습니다. 문제파악부터 설계, 평가까지
                복잡한 프로세스를 거쳐 만든 프로그램이문제파악부터 설계,
                평가까지 복잡한 프로세스를 거쳐 만든 프로그램이 좋은 평가를 받을
                때, 그 어떤 일보다 큰 성취감을 느낍니다. 읽기 쉬운 코드,
                모듈화가 쉬운 코드를 지향하며 꾸준히 성장하는 개발자가
                되고싶습니다.
              </Text>
              <Layout margin={[30, 0, 40, 0]} direction={'row'} gap={'10px'}>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    React
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    HTML
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    CSS
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    Javascript
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
              </Layout>
            </Layout>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Layout direction={'row'}>
                <Image
                  src={TmpImg}
                  alt={''}
                  style={{ width: '80px', height: '80px' }}
                />
                <Layout gap={'10px'} margin={[0, 0, 0, 20]}>
                  <Text weight={600} fontSize={24}>
                    프로젝트 이름
                  </Text>
                  <Text weight={400} fontSize={16}>
                    2022.01.11 ~ 2023.12.31
                  </Text>
                </Layout>
              </Layout>
              <Text margin={[40, 0, 0, 0]} weight={400} fontSize={17}>
                문제파악부터 설계, 평가까지 복잡한 프로세스를 거쳐 만든
                프로그램이 좋은 평가를 받을 때, 그 어떤 일보다 큰 성취감을
                느낍니다. 읽기 쉬운 코드, 모듈화가 쉬운 코드를 지향하며 꾸준히
                성장하는 개발자가 되고싶습니다. 문제파악부터 설계, 평가까지
                복잡한 프로세스를 거쳐 만든 프로그램이문제파악부터 설계,
                평가까지 복잡한 프로세스를 거쳐 만든 프로그램이 좋은 평가를 받을
                때, 그 어떤 일보다 큰 성취감을 느낍니다. 읽기 쉬운 코드,
                모듈화가 쉬운 코드를 지향하며 꾸준히 성장하는 개발자가
                되고싶습니다.
              </Text>
              <Layout margin={[30, 0, 40, 0]} direction={'row'} gap={'10px'}>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    React
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    HTML
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    CSS
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
                <Layout
                  bgColor={'gray100'}
                  height={'40px'}
                  justify={'center'}
                  align={'center'}
                  xPadding={'20px'}
                  borderRadius={'6px'}
                  direction={'row'}
                  gap={'12px'}
                >
                  <Text weight={400} fontSize={17}>
                    Javascript
                  </Text>
                  <Close fillColor={Colors.gray900} width={12} height={12} />
                </Layout>
              </Layout>
            </Layout>
          </Layout>
          <Layout margin={[100, 0, 0, 0]}>
            <Text weight={500} fontSize={27}>
              수상
            </Text>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Text weight={500} fontSize={20}>
                연합해커톤 대통령상
              </Text>
              <Text
                weight={400}
                fontSize={16}
                color={'gray300'}
                margin={[20, 0, 0, 0]}
              >
                전국SW마이스터고등학교 | 2022.06.15
              </Text>
              <Text weight={400} fontSize={16} margin={[20, 0, 0, 0]}>
                소프트웨어마이스터고 재학생을 대상으로 한 연합해커톤에서
                대통령상을 수상했습니다. 짧은 기간동안의 개발이었지만 높은
                퀄리티의 결과물을 내기 위해서 기획과정에서 어쩌구저쩌구하여
                목표를 잡았고, intellij의 cokworking 기능을 활용하여 협업 개발
                및 배포 전 CI 단계에서의 시간을 절약하며 개발하였습니다.
              </Text>
              <Layout
                xPadding={'18px'}
                yPadding={'14.5px'}
                border={'2px solid'}
                margin={[20, 0, 0, 0]}
              >
                <Text>https://asdf.asdf/asdf</Text>
              </Layout>
            </Layout>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Text weight={500} fontSize={20}>
                연합해커톤 대통령상
              </Text>
              <Text
                weight={400}
                fontSize={16}
                color={'gray300'}
                margin={[20, 0, 0, 0]}
              >
                전국SW마이스터고등학교 | 2022.06.15
              </Text>
              <Text weight={400} fontSize={16} margin={[20, 0, 0, 0]}>
                소프트웨어마이스터고 재학생을 대상으로 한 연합해커톤에서
                대통령상을 수상했습니다. 짧은 기간동안의 개발이었지만 높은
                퀄리티의 결과물을 내기 위해서 기획과정에서 어쩌구저쩌구하여
                목표를 잡았고, intellij의 cokworking 기능을 활용하여 협업 개발
                및 배포 전 CI 단계에서의 시간을 절약하며 개발하였습니다.
              </Text>
              <Layout
                xPadding={'18px'}
                yPadding={'14.5px'}
                border={'2px solid'}
                margin={[20, 0, 0, 0]}
              >
                <Text>https://asdf.asdf/asdf</Text>
              </Layout>
            </Layout>
          </Layout>
          <Layout margin={[100, 0, 0, 0]}>
            <Text weight={500} fontSize={27}>
              자격증
            </Text>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Text weight={500} fontSize={20}>
                SQLD
              </Text>
              <Text
                weight={400}
                fontSize={16}
                color={'gray300'}
                margin={[20, 0, 0, 0]}
              >
                전국SW마이스터고등학교 | 2022.06.15
              </Text>
            </Layout>
            <Layout
              border={'2px solid #F6F6F6'}
              borderRadius={'15px'}
              xPadding={'4.16vw'}
              yPadding={'60px'}
              margin={[40, 0, 0, 0]}
            >
              <Text weight={500} fontSize={20}>
                정보처리기능사
              </Text>
              <Text
                weight={400}
                fontSize={16}
                color={'gray300'}
                margin={[20, 0, 0, 0]}
              >
                전국SW마이스터고등학교 | 2022.06.15
              </Text>
            </Layout>
          </Layout>
        </Layout>
        <Layout margin={['0', '0', '0', '1.98vw']}>
          <Layout align={'flex-end'}>
            <Layout direction={'row'} gap={'20px'}>
              <Text weight={300} fontSize={24}>
                기본 정보
              </Text>
              <Layout
                borderRadius={'90px'}
                bgColor={'gray900'}
                width={'20px'}
                height={'20px'}
              ></Layout>
            </Layout>
            <Layout
              width={'1px'}
              bgColor={'gray900'}
              height={'60px'}
              margin={[0, 10, 0, 0]}
            ></Layout>
          </Layout>
          <Layout align={'flex-end'} margin={[5, 0, 0, 0]}>
            <Layout
              direction={'row'}
              gap={'25px'}
              align={'center'}
              margin={[0, 5, 0, 0]}
            >
              <Text weight={300} fontSize={17}>
                기술 스택
              </Text>
              <Layout
                borderRadius={'90px'}
                bgColor={'gray300'}
                width={'10px'}
                height={'10px'}
              ></Layout>
            </Layout>
            <Layout
              width={'1px'}
              bgColor={'gray300'}
              height={'20px'}
              margin={[15, 10, 0, 0]}
            ></Layout>
          </Layout>
          <Layout align={'flex-end'} margin={[5, 0, 0, 0]}>
            <Layout
              direction={'row'}
              gap={'25px'}
              align={'center'}
              margin={[0, 5, 0, 0]}
            >
              <Text weight={300} fontSize={17}>
                프로젝트
              </Text>
              <Layout
                borderRadius={'90px'}
                bgColor={'gray300'}
                width={'10px'}
                height={'10px'}
              ></Layout>
            </Layout>
            <Layout
              width={'1px'}
              bgColor={'gray300'}
              height={'20px'}
              margin={[15, 10, 0, 0]}
            ></Layout>
          </Layout>
          <Layout align={'flex-end'} margin={[5, 0, 0, 0]}>
            <Layout
              direction={'row'}
              gap={'25px'}
              align={'center'}
              margin={[0, 5, 0, 0]}
            >
              <Text weight={300} fontSize={17}>
                수상
              </Text>
              <Layout
                borderRadius={'90px'}
                bgColor={'gray300'}
                width={'10px'}
                height={'10px'}
              ></Layout>
            </Layout>
            <Layout
              width={'1px'}
              bgColor={'gray300'}
              height={'20px'}
              margin={[15, 10, 0, 0]}
            ></Layout>
          </Layout>
          <Layout align={'flex-end'} margin={[5, 0, 0, 0]}>
            <Layout
              direction={'row'}
              gap={'25px'}
              align={'center'}
              margin={[0, 5, 0, 0]}
            >
              <Text weight={300} fontSize={17}>
                자격증
              </Text>
              <Layout
                borderRadius={'90px'}
                bgColor={'gray300'}
                width={'10px'}
                height={'10px'}
              ></Layout>
            </Layout>
            <Layout
              width={'1px'}
              bgColor={'gray300'}
              height={'20px'}
              margin={[15, 10, 0, 0]}
            ></Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
