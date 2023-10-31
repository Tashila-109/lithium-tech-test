import { useCallback, useState } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ColumnDef } from '@tanstack/react-table';
import format from 'date-fns/format';

import { PayoutsApi } from '@api/api';
import { Payout } from '@lithium-types/models';

import Typography from '@/components/Typography';
import { Main } from '@/styles/sharedstyles';
import { TableLayout } from '@/components/TableLayout';
import { TableEmptyState } from '@/components/Table';
import { Tag } from '@/components/Tag';
import { getFormattedCurrency } from '@/lib/data-formatters';
import { useDebouncedTextChange } from '@/lib/hooks';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [searchTermFilter, setSearchTermFilter] = useState<string>('');

  const handleSearchTermChange = useCallback((value: string) => {
    setSearchTermFilter(value);
  }, []);

  const [searchTerm, onSearchTermChange] = useDebouncedTextChange(handleSearchTermChange, 500);

  const handleOnSearchClear = useCallback(() => {
    setSearchTermFilter('');
    onSearchTermChange('');
  }, [onSearchTermChange]);

  const payoutsQuery = PayoutsApi.usePayoutsQuery();

  const payoutsSearchQuery = PayoutsApi.useSearchPayoutsQuery(searchTermFilter, {
    enabled: !!searchTermFilter,
  });

  const payoutsLoading = payoutsQuery.isLoading || (payoutsSearchQuery.isFetching && payoutsSearchQuery.isLoading);

  let rowData: Payout[] | undefined;
  if (searchTermFilter.length > 0 && !payoutsSearchQuery.isLoading && !payoutsSearchQuery.isError) {
    rowData = payoutsSearchQuery?.data;
  } else if (!payoutsQuery.isLoading && !payoutsQuery.isError) {
    rowData = payoutsQuery?.data?.data;
  }

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

  return (
    <>
      <Head>
        <title>Payouts</title>
        <meta name='description' content='Payouts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Main className={inter.className}>
        <Typography.H3>Payouts</Typography.H3>
        <TableLayout
          header='Payout History'
          tData={rowData}
          tColumns={columns}
          onSearchChange={onSearchTermChange}
          searchValue={searchTerm}
          onSearchClear={handleOnSearchClear}
          isLoading={payoutsLoading}
          tableEmptyState={<TableEmptyState heading='No Payouts' description='There are no Payouts to show.' />}
        />
      </Main>
    </>
  );
}
