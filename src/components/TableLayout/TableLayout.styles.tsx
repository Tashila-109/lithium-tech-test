import { Flex } from '@/styles/sharedstyles';
import styled from 'styled-components';

export const HeaderTag = styled.div`
  height: 2rem;
  width: 1rem;
  background-color: #999dff;
  border-radius: 0.25rem;
`;

export const HeaderWrapper = styled(Flex)`
  gap: 1rem;
`;

export const TableLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;
