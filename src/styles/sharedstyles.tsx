import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 2.188rem 3rem 1rem 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export { Container, Main, Flex };
