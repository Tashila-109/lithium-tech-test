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
  font-weight: 600;
  color: #1a1d1f;
`;

export const SkeletonCell = styled.div`
  width: 95%;
  animation: pulse 1.5s infinite;

  div {
    margin: 1.25rem 0;
    height: 18px;
    width: 100%;
    border-radius: 0.25rem;
    background-color: #e5e5e5;
  }

  @keyframes pulse {
    0% {
      background-color: #eaeaea;
    }
    50% {
      background-color: #d5d5d5;
    }
    100% {
      background-color: #eaeaea;
    }
  }
`;
