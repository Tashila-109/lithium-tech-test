import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableBackground};
  }
`;

export const TableHeaderCell = styled.th`
  padding: 1.25rem 0;
  text-align: left;
`;

export const TableData = styled.td`
  padding: 1.25rem 0;
  font-size: 14px;
`;
