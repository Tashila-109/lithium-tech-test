import styled from 'styled-components';

interface StyledTagProps {
  color?: string;
}

export const StyledTag = styled.span<StyledTagProps>`
  background-color: ${({ color }) => color || '#E5E5E5'};
  border-radius: 6px;
  padding: 0.125rem 0.5rem;
`;