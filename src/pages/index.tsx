import styled from '@emotion/styled';
import Logo from '../assets/Home/logo';
import Image from 'next/image';
import HomeBgImg1 from '../assets/Home/homeBgImg1.png';
import HomeImg2_01 from '../assets/Home/homeImg2_01.png';
import HomeImg2_02 from '../assets/Home/homeImg2_02.png';
import HomeImg2_03 from '../assets/Home/homeImg2_03.png';
import HomeImg3 from '../assets/Home/homeImg3.png';
import HomeImg3_01 from '../assets/Home/homeImg3_01';
import HomeImg4_01 from '../assets/Home/homeImg4_01.png';
import HomeImg4_02 from '../assets/Home/homeImg4_02.png';
import HomeImg4_03 from '../assets/Home/homeImg4_03.png';
import { Text } from '../components/common/text';
import { color, colorKeyOfType } from '../styles/theme/color';
import { marginCssType, marginToCss } from '../utils/margin';
import Homeimg3_02 from '../assets/Home/homeimg3_02';
import HomeImg3_03 from '../assets/Home/homeImg3_03';
import HomeImg3_04 from '../assets/Home/homeImg3_04';
import { FaceBookIcon } from '../assets/Home/faceBook';
import GithubIcon from '../assets/Home/github';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

function MainSection() {
  return (
    <MainSectionWrapper>
      <SectionLayout align={'flex-start'}>
        <Image
          src={HomeBgImg1}
          alt={''}
          placeholder="blur"
          style={{ position: 'absolute', zIndex: -1 }}
        />
        <ArticleWrapper
          minHeight={520}
          justify={'center'}
          align={'flex-start'}
          direction={'column'}
          xPadding={300}
        >
          <Text weight={700} fontSize={64}>
            Resume Book
            <br />
            온라인 작성 서비스
          </Text>
          <Text weight={100} fontSize={24}>
            Resume Book Online Write Service
          </Text>
          <SampleButton>Exit 시작하기</SampleButton>
        </ArticleWrapper>
      </SectionLayout>
      <SectionLayout align={'center'}>
        <ArticleWrapper
          justify={'flex-start'}
          align={'center'}
          direction={'column'}
          margin={[0, 0, 60, 0]}
        >
          <Text weight={700} fontSize={48}>
            온라인 리쥬메
          </Text>
          <Text weight={400} fontSize={17}>
            책으로만 보던 Resume Book을 언제 어디서든 이용해 보세요
          </Text>
        </ArticleWrapper>
        <ArticleWrapper direction={'row'}>
          <ArticleWrapper position={'relative'} xPadding={0}>
            <Image src={HomeImg2_01} alt={''} placeholder="blur" />
            <ArticleWrapper
              position={'absolute'}
              direction={'column'}
              bottom={34}
              left={24}
              xPadding={0}
            >
              <Text color={'gray50'} weight={500} margin={[0, 0, 10, 0]}>
                편리한 UI
              </Text>
              <Stick x1={1} x2={23} y1={1} y2={1} width={24} height={2} />
            </ArticleWrapper>
          </ArticleWrapper>
          <ArticleWrapper position={'relative'} xPadding={0}>
            <Image src={HomeImg2_02} alt={''} placeholder="blur" />
            <ArticleWrapper
              position={'absolute'}
              direction={'column'}
              bottom={34}
              left={24}
              xPadding={0}
            >
              <Text color={'gray50'} weight={500} margin={[0, 0, 10, 0]}>
                간편한 레쥬메 관리
              </Text>
              <Stick x1={1} x2={23} y1={1} y2={1} width={24} height={2} />
            </ArticleWrapper>
          </ArticleWrapper>
          <ArticleWrapper position={'relative'} xPadding={0}>
            <Image src={HomeImg2_03} alt={''} placeholder="blur" />
            <ArticleWrapper
              position={'absolute'}
              direction={'column'}
              bottom={34}
              left={24}
              xPadding={0}
            >
              <Text color={'gray50'} weight={500} margin={[0, 0, 10, 0]}>
                빠른 학생찾기
              </Text>
              <Stick x1={1} x2={23} y1={1} y2={1} width={24} height={2} />
            </ArticleWrapper>
          </ArticleWrapper>
        </ArticleWrapper>
      </SectionLayout>
      <SectionLayout
        align={'center'}
        justify={'center'}
        margin={[0, 0, 240, 0]}
        position={'relative'}
      >
        <ArticleWrapper justify={'center'} align={'center'} xPadding={0}>
          <Image
            src={HomeImg3}
            alt={''}
            placeholder="blur"
            height={800}
            width={1320}
            style={{ position: 'absolute', zIndex: -1 }}
          />
          <ArticleWrapper
            direction={'column'}
            position={'absolute'}
            left={0}
            align={'flex-start'}
            justify={'space-between'}
            minHeight={350}
            xPadding={300}
          >
            <Text weight={700} fontSize={48}>
              페이지 에디터
            </Text>
            <Text weight={400} fontSize={17}>
              기존의 형식적인 RESUME BOOK이 아닌 페이지 에디터를 이용해
              <br />
              자신만의 스타일로 포트폴리오를 작성해 보세요
            </Text>
            <Homeimg3_02 />
            <HomeImg3_03 />
          </ArticleWrapper>
          <HomeImg3_04 />
          <HomeImg3_01 />
        </ArticleWrapper>
      </SectionLayout>
      <SectionLayout align={'center'} justify={'flex-start'}>
        <ArticleWrapper
          direction={'column'}
          align={'center'}
          margin={[0, 0, 60, 0]}
        >
          <Text weight={700} fontSize={96}>
            학생 찾기
          </Text>
          <Text weight={400} fontSize={17}>
            온라인 Resume Book을 보고 원하는 학생을 만나보세요
          </Text>
          <Text weight={400} fontSize={17}>
            원하는 학생이 있다면 DSM 산업협력부를 통해서 컨택 문의를 해보세요
          </Text>
        </ArticleWrapper>
        <ArticleWrapper gap={20} margin={[0, 0, 0, 0]} direction={'row'}>
          <Image src={HomeImg4_01} alt={''} placeholder={'blur'} />
          <Image src={HomeImg4_02} alt={''} placeholder={'blur'} />
          <Image src={HomeImg4_03} alt={''} placeholder={'blur'} />
        </ArticleWrapper>
      </SectionLayout>
    </MainSectionWrapper>
  );
}

interface IStick {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  width: number;
  height: number;
  fill?: colorKeyOfType;
  strokeFill?: colorKeyOfType;
  position?: 'absolute';
}

function Stick({
  width,
  height,
  x1,
  x2,
  y2,
  y1,
  fill,
  strokeFill,
  position,
}: IStick) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 2"
      fill={fill ?? 'none'}
      style={{ position }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={strokeFill ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ISectionLayout extends marginCssType {
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  direction?: 'row' | 'column';
  position?: 'absolute' | 'fixed' | 'relative';
}

interface IArticleWrapper extends marginCssType {
  minHeight?: number;
  minWidth?: number;
  xPadding?: number;
  bgColor?: colorKeyOfType;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  direction?: 'column' | 'row';
  position?: 'absolute' | 'fixed' | 'relative';
  gap?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const MainSectionWrapper = styled.div`
  position: relative;
  margin-top: 80px;
  max-width: 80vw;
`;
const SectionLayout = styled.div<ISectionLayout>`
  display: flex;
  position: ${({ position }) => position};
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'flex-start'};
  ${({ margin }) => marginToCss({ margin })};
  height: 100vh;
  width: 100vw;
`;
const ArticleWrapper = styled.div<IArticleWrapper>`
  display: flex;
  position: ${({ position }) => position};
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  min-height: ${({ minHeight }) => minHeight}px;
  min-width: ${({ minWidth }) => minWidth}px;
  padding-left: ${({ xPadding = 0 }) => xPadding}px;
  padding-right: ${({ xPadding = 0 }) => xPadding}px;
  ${({ margin }) => marginToCss({ margin })};
  background-color: ${({ bgColor }) => bgColor};
  gap: ${({ gap }) => gap}px;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
`;
const SampleButton = styled.button`
  margin-top: 40px;
  border: 2px solid;
  padding: 14px 18px 14px 18px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <button>로그인</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  width: 100vw;
  height: 80px;
  padding-left: 300px;
  padding-right: 300px;
  z-index: 999;
`;

function Footer() {
  return (
    <FooterWrapper>
      <ArticleWrapper
        align={'flex-start'}
        justify={'center'}
        minHeight={300}
        gap={26}
        xPadding={300}
      >
        <ArticleWrapper direction={'row'} xPadding={0}>
          <Text weight={600} fontSize={30}>
            Exit
          </Text>
          <ArticleWrapper
            direction={'row'}
            align={'center'}
            xPadding={0}
            position={'absolute'}
            right={300}
            gap={26}
          >
            <a href={'https://www.facebook.com/entrydsm/'}>
              <FaceBookIcon />
            </a>
            <a href={'https://github.com/EntryDSM'}>
              <GithubIcon />
            </a>
          </ArticleWrapper>
        </ArticleWrapper>
        <Text weight={500} fontSize={16}>
          ©2023 Entry
        </Text>
        <Text weight={400} fontSize={14}>
          주소 : 대전광역시 유성구 가정북로 76 (장동 23-9) <br />
          교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 |
          Fax : 042-863-4308
        </Text>
        <ArticleWrapper direction={'row'} xPadding={0}>
          <Text>Entrepreneur</Text>
          <ArticleWrapper
            direction={'row'}
            align={'center'}
            xPadding={0}
            position={'absolute'}
            right={300}
            gap={26}
          >
            <Text>개인정보처리방침 | 이용약관</Text>
          </ArticleWrapper>
        </ArticleWrapper>
      </ArticleWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: absolute;
  height: 300px;
  width: 100vw;
  border-top: 2px solid #f6f6f6;
  background-color: ${color.gray100};
`;
