import styled from 'styled-components';

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
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

export { Container, Main };
