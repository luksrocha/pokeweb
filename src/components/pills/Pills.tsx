import { ReactNode } from 'react';
import { PillsContainer } from './styles';

interface PillsProps {
  color: string;
  children: ReactNode;
}

const Pills = ({ children, color }: PillsProps) => {
  return <PillsContainer bgColor={color}>{children}</PillsContainer>;
};

export { Pills };
