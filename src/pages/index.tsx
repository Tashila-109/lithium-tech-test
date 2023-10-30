import Head from 'next/head'
import { Inter } from 'next/font/google'

import Typography from '@/components/Typography';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Payouts</title>
        <meta name="description" content="Payouts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <Typography.H3>Next.js + TypeScript + Styled Components</Typography.H3>
      </main>
    </>
  )
}
