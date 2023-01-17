
export default function Page() {
  return (
    <Layout width={'100vw'} height={'100vh'} direction={'row'}>
      <Layout position={'relative'} height={'100vh'}>
        <Image src={AuthBgImg} alt={''} style={{ width: '50vw' }} />
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
