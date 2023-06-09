import Container from 'app/components/Container'
import Head from 'next/head'

export default function Tokens() {
  return (
    <Container id="tokens-page" className="py-4 md:py-8 lg:py-12" maxWidth="full">
      <Head>
        <title>Tokens | NEXUSSwap</title>
        <meta key="description" name="description" content="NEXUSSwap tokens." />
        <meta key="twitter:description" name="twitter:description" content="NEXUSSwap tokens." />
        <meta key="og:description" property="og:description" content="NEXUSSwap tokens." />
      </Head>
    </Container>
  )
}
