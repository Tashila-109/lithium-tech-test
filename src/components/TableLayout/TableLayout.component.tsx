
import Typography from '../Typography';

import { HeaderTag, HeaderWrapper } from './TableLayout.styles';

interface TableLayoutProps {
  header: string;
  // data: any[];
}
interface BaseLayoutProps {
  id: string;
  children: React.ReactNode;
}

interface TableHeaderProps {
  header: string;
}

const TableLayout: React.FC<TableLayoutProps> = ({ header }) => {
  return <TableHeader header={header} />;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ id, children }) => {
  //Base Layout
  const baseLayoutClasses = 'min-h-[100vh] mx-auto w-[90%]';

  return (
    <div id={id} className={baseLayoutClasses}>
      {children}
    </div>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  return (
    <HeaderWrapper>
      <HeaderTag />
      <Typography.Title>{header}</Typography.Title>
    </HeaderWrapper>
  );
};

export default TableLayout;
