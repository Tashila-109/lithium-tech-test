import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ColumnDef } from '@tanstack/react-table';
import format from 'date-fns/format';

import { PayoutsApi } from '@api/api';
import { Payout } from '@lithium-types/models';

import Typography from '@/components/Typography';
import { Main } from '@/styles/sharedstyles';
import { TableLayout } from '@/components/TableLayout';
import { Tag } from '@/components/Tag';
import { getFormattedCurrency } from '@/lib/data-formatters';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = PayoutsApi.usePayoutsQuery();

  const columns: ColumnDef<Payout>[] = [
    {
      accessorKey: 'dateAndTime',
      header: 'Date & Time',
      cell: (info: any) => <Typography.Base>{format(new Date(info.getValue()), 'ccc, LLL d, kk:mm')}</Typography.Base>,
    },
    {
      accessorKey: 'username',
      header: 'Username',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (info: any) => {
        const status = info.getValue().toString();
        const color = status === 'Completed' ? '#60CA57' : '#6f767e66';
        return <Tag label={status} color={color} />;
      },
    },
    {
      accessorKey: 'value',
      header: 'Value',
      cell: (info: any) => getFormattedCurrency(info.getValue()),
    },
  ];

  console.log(data);
  return (
    <>
      <Head>
        <title>Payouts</title>
        <meta name='description' content='Payouts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Main className={inter.className}>
        <Typography.H3>Payouts</Typography.H3>
        <TableLayout header='Payout History' tData={data?.data} tColumns={columns} />
      </Main>
    </>
  );
}
