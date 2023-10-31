import { useMemo } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';

import { Payout } from '@lithium-types/models';

import { TableContainer, TableData, TableHeaderCell, TableRow } from './Table.styles';
import Typography from '../Typography';
import TableLoadingSkeleton from './TableLoadingSkeleton.component';

interface TableProps {
  tData?: Payout[];
  tColumns: ColumnDef<Payout>[];
  isLoading?: boolean;
}

const Table: React.FC<TableProps> = ({ tData = [], tColumns, isLoading = false }) => {
  const data = useMemo(() => tData, [tData]);

  const table = useReactTable({
    data,
    columns: tColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <TableContainer>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHeaderCell key={header.id}>
                  <Typography.Caption>{flexRender(header.column.columnDef.header, header.getContext())}</Typography.Caption>
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
        {isLoading ? (
            <TableLoadingSkeleton table={table} pageSize={10} />
          ) : (
            <>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableData key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableData>
              ))}
            </TableRow>
          ))}
            </>
          )}

        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;
