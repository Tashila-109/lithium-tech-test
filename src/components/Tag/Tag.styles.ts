import styled from 'styled-components';

interface StyledTagProps {
  color?: string;
}

export const StyledTag = styled.span<StyledTagProps>`
  background-color: ${({ color }) => color || '#E5E5E5'};
  color: ${({ theme }) => theme.colors.typography.title};
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.5rem;
`;
