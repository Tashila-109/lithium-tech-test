import Head from 'next/head';
import { Inter } from 'next/font/google';

import { PayoutsApi } from '@api/api';

import Typography from '@/components/Typography';
import { Main } from '@/styles/sharedstyles';
import { TableLayout } from '@/components/TableLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const payoutsQuery = PayoutsApi.usePayoutsQuery();

  console.log(payoutsQuery);

  return (
    <>
      <Head>
        <title>Payouts</title>
        <meta name='description' content='Payouts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Main className={inter.className}>
        <Typography.H3>Payouts</Typography.H3>
        <TableLayout header='Payout History' />
      </Main>
    </>
  );
}
