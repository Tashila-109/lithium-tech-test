import { ColumnDef } from '@tanstack/react-table';

import { Payout } from '@lithium-types/models';

import { Flex } from '@/styles/sharedstyles';
import { Table } from '../Table';
import Typography from '../Typography';

import { HeaderTag, HeaderWrapper, TableLayoutWrapper } from './TableLayout.styles';

interface TableLayoutProps {
  header: string;
  tData?: Payout[];
  tColumns: ColumnDef<Payout>[];
}
interface BaseLayoutProps {
  id: string;
  children: React.ReactNode;
}

interface TableHeaderProps {
  header: string;
}

const TableLayout: React.FC<TableLayoutProps> = ({ header, tData, tColumns }) => {
  return (
    <TableLayoutWrapper>
      <TableHeader header={header} />
      <Table tData={tData} tColumns={tColumns} />
    </TableLayoutWrapper>
  );
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ id, children }) => {
  //Base Layout
  const baseLayoutClasses = 'min-h-[100vh] mx-auto w-[90%]';

  return (
    <div id={id} className={baseLayoutClasses}>
      {children}
    </div>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  return (
    <HeaderWrapper>
      <HeaderTag />
      <Typography.Title>{header}</Typography.Title>
    </HeaderWrapper>
  );
};

export default TableLayout;
