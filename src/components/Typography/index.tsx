import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: -0.8px;
  color: ${({ color, theme }) => color || theme.colors.typography.header};
`;

const Title = styled.h4`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.4px;
  color: ${({ color, theme }) => color || theme.colors.typography.title};
`;

const Base = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.14px;
  color: ${({ color, theme }) => color || theme.colors.typography.base};
  display: inline-block;
  margin: unset;
`;

const Caption = styled(Base)`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: -0.12px;
`;

const Typography = {
  Base,
  H3,
  Title,
  Caption,
};

export default Typography;
