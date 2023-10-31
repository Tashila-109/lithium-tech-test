import { EmptyStateContainer, EmptyStateDescription, EmptyStateHeading } from './Table.styles';

type TableEmptyStateProps = {
  heading: string;
  description: string;
};

export const TableEmptyState: React.FC<TableEmptyStateProps> = ({ heading, description }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateHeading>{heading}</EmptyStateHeading>
      <EmptyStateDescription>{description}</EmptyStateDescription>
    </EmptyStateContainer>
  );
};

export default TableEmptyState;
