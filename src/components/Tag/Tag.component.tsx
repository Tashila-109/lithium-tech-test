import styled from 'styled-components';

import Typography from '@/components/Typography';

import { StyledTag } from './Tag.styles';

interface TagProps {
  label: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({ color, label, className, style }) => {
  return (
    <StyledTag color={color} className={className} style={style}>
      {label}
    </StyledTag>
  );
};

export default Tag;
