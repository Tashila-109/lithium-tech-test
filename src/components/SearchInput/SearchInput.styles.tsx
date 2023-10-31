import styled, { css } from 'styled-components';

export const SearchContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  color: #aaa;

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
  
  /* sm: styles */
  @media (min-width: 640px) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
  }
`;

export const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  height: 48px; 
  padding: 1rem 1rem 1rem 2.5rem; 
  border: 1px solid transparent;
  border-radius: 0.5rem; 
  background-color: transparent; 
  color: #333; 
  font-size: 1rem;
  outline-offset: 0;
  outline: none;
  
  &::placeholder {
    color: #aaa; 
  }

  &:focus {
    border-color: #333; 
  }
  
  ${props => props.disabled && css`
    background-color: #f5f5f5; 
    color: #ddd; 
    border-color: #f5f5f5; 
  `}
  
  @media (min-width: 640px) {
    height: 40px; 
    border-color: #333; 
    background-color: transparent; 
    font-size: 0.875rem; 
  }
`;
