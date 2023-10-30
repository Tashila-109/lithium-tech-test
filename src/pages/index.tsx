import Head from 'next/head'
import { Inter } from 'next/font/google'

import Typography from '@/components/Typography';
import { Main } from '@/styles/sharedstyles';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Payouts</title>
        <meta name="description" content="Payouts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main className={inter.className}>
        <Typography.H3>Payouts</Typography.H3>
      </Main>
    </>
  )
}
