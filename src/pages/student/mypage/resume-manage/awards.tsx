import { Layout } from '@components/common/layout';
import { Text } from '@components/common/text';
import { Button } from '@components/common/button';
import { ButtonKinds } from '@components/common/button/@type';
import { Colors } from '@styles/theme/color';
import Check from '@assets/icon/check';
import Plus from '@assets/icon/plus';
import { Input } from '@components/common/input';
import UpArrow from '@assets/icon/up-arrow';
import Delete from '@assets/icon/delete';

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
            이력서 관리
          </Text>
          <Text weight={100} fontSize={24} color={'gray50'}>
            Resume Management
          </Text>
        </Layout>
        <Layout direction={'row'} gap={'15px'}>
          <Button btnKinds={ButtonKinds.OUTLINED_WHITE}>
            <Text weight={600} fontSize={14}>
              임시저장
            </Text>
          </Button>
          <Button btnKinds={ButtonKinds.TEXT}>
            <Text weight={600} fontSize={14}>
              제출
            </Text>
          </Button>
        </Layout>
      </Layout>
      <Layout
        direction={'row'}
        zIndex={1}
        margin={['20.833vw', '0', '200px', '20.833vw']}
      >
        <Layout
          bgColor={'gray50'}
          width={'40.7vw'}
          borderRadius={'15px'}
          position={'relative'}
          xPadding={'60px'}
        >
          <Layout
            direction={'row'}
            justify={'space-between'}
            align={'center'}
            margin={[60, 0, 0, 0]}
          >
            <Text weight={500} fontSize={27}>
              수상
            </Text>
            <Plus width={24} height={24} fillColor={Colors.gray900} />
          </Layout>
          <Layout
            margin={[20, 0, 20, -45]}
            border={'2px solid #F6F6F6'}
            borderRadius={'15px'}
            xPadding={'2vw'}
            width={'38.75vw'}
          >
            <Layout
              direction={'row'}
              margin={[40, 0, 0, 0]}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={22} color={'gray300'}>
                프로젝트 이름
              </Text>
              <Layout direction={'row'} gap={'20px'}>
                <UpArrow width={24} height={24} fillColor={Colors.gray900} />
                <Delete width={24} height={24} fillColor={Colors.gray900} />
              </Layout>
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                상 이름
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'상 이름을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                수여기관
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'수여기관을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                기간
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'기간을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                내용
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'내용을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
                height={'200px'}
                inputAs={'textarea'}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                url
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'url을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
          </Layout>
          <Layout
            margin={[20, 0, 20, -45]}
            border={'2px solid #F6F6F6'}
            borderRadius={'15px'}
            xPadding={'2vw'}
            width={'38.75vw'}
          >
            <Layout
              direction={'row'}
              margin={[40, 0, 0, 0]}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={22} color={'gray300'}>
                프로젝트 이름
              </Text>
              <Layout direction={'row'} gap={'20px'}>
                <UpArrow width={24} height={24} fillColor={Colors.gray900} />
                <Delete width={24} height={24} fillColor={Colors.gray900} />
              </Layout>
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                상 이름
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'상 이름을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                수여기관
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'수여기관을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                기간
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'기간을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                내용
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'내용을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
                height={'200px'}
                inputAs={'textarea'}
              />
            </Layout>
            <Layout
              margin={[40, 0, 0, 0]}
              direction={'row'}
              align={'flex-start'}
              width={'34vw'}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={20}>
                url
              </Text>
              <Input
                name={''}
                kindOfInput={'gray'}
                placeHolder={'url을 입력해주세요.'}
                width={'25vw'}
                margin={['0', '0', '0', '4.68vw']}
              />
            </Layout>
          </Layout>
          <Layout
            margin={[20, 0, 20, -45]}
            border={'2px solid #F6F6F6'}
            borderRadius={'15px'}
            xPadding={'2vw'}
            width={'38.75vw'}
          >
            <Layout
              direction={'row'}
              margin={[40, 0, 40, 0]}
              justify={'space-between'}
            >
              <Text weight={500} fontSize={22} color={'gray300'}>
                프로젝트 이름
              </Text>
              <Layout direction={'row'} gap={'20px'}>
                <UpArrow width={24} height={24} fillColor={Colors.gray900} />
                <Delete width={24} height={24} fillColor={Colors.gray900} />
              </Layout>
            </Layout>
          </Layout>
        </Layout>
        <Layout margin={['0', '0', '0', '1.98vw']}>
          <Layout
            height={'160px'}
            width={'15.625vw'}
            bgColor={'gray50'}
            borderRadius={'15px'}
            align={'flex-start'}
            justify={'center'}
            xPadding={'36px'}
          >
            <Text weight={600} fontSize={30} color={'gray300'}>
              미제출
            </Text>
          </Layout>
          <Layout
            height={'46px'}
            width={'15.625vw'}
            bgColor={'gray50'}
            borderRadius={'15px'}
            align={'center'}
            justify={'center'}
            xPadding={'36px'}
            margin={[20, 0, 0, 0]}
          >
            <Text weight={500} fontSize={17} color={'gray900'}>
              미리보기
            </Text>
          </Layout>
          <Layout
            height={'380px'}
            width={'15.625vw'}
            bgColor={'gray50'}
            borderRadius={'15px'}
            align={'center'}
            justify={'center'}
            xPadding={'36px'}
            margin={[20, 0, 0, 0]}
            gap={'10px'}
          >
            <Layout
              direction={'row'}
              xPadding={'16px'}
              yPadding={'20px'}
              justify={'space-between'}
              align={'center'}
              borderRadius={'6px'}
              width={'13.55vw'}
              bgColor={'gray50'}
            >
              <Text weight={400} fontSize={17} color={'gray900'}>
                내 정보
              </Text>
              <Check width={24} height={24} fillColor={Colors.check} />
            </Layout>
            <Layout
              direction={'row'}
              xPadding={'16px'}
              yPadding={'20px'}
              justify={'space-between'}
              align={'center'}
              borderRadius={'6px'}
              width={'13.55vw'}
              bgColor={'gray50'}
            >
              <Text weight={400} fontSize={17} color={'gray900'}>
                자기소개
              </Text>
              <Check width={24} height={24} fillColor={Colors.check} />
            </Layout>
            <Layout
              direction={'row'}
              xPadding={'16px'}
              yPadding={'20px'}
              justify={'space-between'}
              align={'center'}
              borderRadius={'6px'}
              width={'13.55vw'}
              bgColor={'gray50'}
            >
              <Text weight={400} fontSize={17} color={'gray900'}>
                프로젝트
              </Text>
              <Check width={24} height={24} fillColor={Colors.check} />
            </Layout>
            <Layout
              direction={'row'}
              xPadding={'16px'}
              yPadding={'20px'}
              justify={'space-between'}
              align={'center'}
              borderRadius={'6px'}
              width={'13.55vw'}
              bgColor={'gray100'}
            >
              <Text weight={400} fontSize={17} color={'gray900'}>
                수상
              </Text>
              <Check width={24} height={24} fillColor={Colors.check} />
            </Layout>
            <Layout
              direction={'row'}
              xPadding={'16px'}
              yPadding={'20px'}
              justify={'space-between'}
              align={'center'}
              borderRadius={'6px'}
              width={'13.55vw'}
              bgColor={'gray50'}
            >
              <Text weight={400} fontSize={17} color={'gray900'}>
                자격증
              </Text>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
