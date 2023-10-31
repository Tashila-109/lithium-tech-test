import { useState } from 'react';
import { Table } from '@tanstack/react-table';

import { SkeletonCell } from './Table.styles';

type TLSProps = {
  table: Table<any>;
  pageSize: number;
};

const extractVisibleNoOfColumns = (table: Table<any>) => {
  const { getHeaderGroups } = table;
  const headerGroup = getHeaderGroups();
  const headers = headerGroup[0].headers;

  const visibleColumns = headers.filter(header => header.column.columnDef.enableHiding !== true && header.id !== 'row-options-menu');

  return visibleColumns.length;
};

const TableLoadingSkeleton: React.FC<TLSProps> = ({ table, pageSize }) => {
  const [noOfColumns, setNoOfColumns] = useState(extractVisibleNoOfColumns(table));

  return (
    <>
      {Array.from({ length: pageSize }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: noOfColumns }).map((_, colIndex) => (
            <td key={colIndex}>
              <SkeletonCell role='status'>
                <div></div>
              </SkeletonCell>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableLoadingSkeleton;
