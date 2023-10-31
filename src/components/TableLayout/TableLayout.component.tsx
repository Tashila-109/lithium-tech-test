import { ColumnDef } from '@tanstack/react-table';

import { Payout } from '@lithium-types/models';

import { Flex } from '@/styles/sharedstyles';
import { Table } from '../Table';
import Typography from '../Typography';

import { HeaderTag, HeaderWrapper, TableLayoutWrapper } from './TableLayout.styles';
import { SearchInput } from '../SearchInput';

interface TableLayoutProps {
  header: string;
  tData?: Payout[];
  tColumns: ColumnDef<Payout>[];
  onSearchChange?: (value: string) => void;
  onSearchClear?: () => void;
  searchValue?: string;
  isLoading?: boolean;
}

interface TableHeaderProps {
  header: string;
  onSearchChange?: (value: string) => void;
  onSearchClear?: () => void;
  searchValue?: string;
}

const TableLayout: React.FC<TableLayoutProps> = ({ header, tData, tColumns, onSearchChange, searchValue, onSearchClear, isLoading }) => {
  return (
    <TableLayoutWrapper>
      <TableHeader header={header} onSearchChange={onSearchChange} searchValue={searchValue} onSearchClear={onSearchClear} />
      <Table tData={tData} tColumns={tColumns} isLoading={isLoading} />
    </TableLayoutWrapper>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({ header, onSearchChange, searchValue, onSearchClear }) => {
  return (
    <HeaderWrapper>
      <HeaderTag />
      <Typography.Title>{header}</Typography.Title>
      <SearchInput id='Payouts-search' onChange={onSearchChange} value={searchValue} onClear={onSearchClear} clearable />
    </HeaderWrapper>
  );
};

export default TableLayout;
