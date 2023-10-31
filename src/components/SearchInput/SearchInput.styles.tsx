import { AiOutlineClose } from 'react-icons/ai';
import styled, { css } from 'styled-components';

export const SearchContainer = styled.div<{ disabled?: boolean }>`
  width: 25rem;
  position: relative;
  color: #aaa;
  margin-left: 2rem;

  &:focus-within {
    color: #333;
  }

  ${props =>
    props.disabled &&
    css`
      color: #ddd;
    `}
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 13.5px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
  }
`;

export const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  height: 32px;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.typography.title};
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.typography.title};
  font-size: 0.875rem;
  outline-offset: 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.typography.base};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: #f5f5f5;
      color: #ddd;
      border-color: #f5f5f5;
    `}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-color: ${({ theme }) => theme.colors.border};
    background-color: transparent;
    font-size: 0.875rem;
  }
`;

export const ClearButton = styled(AiOutlineClose)`
  position: absolute;
  bottom: 10px;
  right: 16px;
  width: 14px;
  height: 14px;
  font-size: 0.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
  }
`;
