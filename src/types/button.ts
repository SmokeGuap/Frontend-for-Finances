import { ReactNode } from 'react';

type buttonType = {
  variant: string;
  bgColor?: string;
  radius?: number;
  height?: string;
  isDisabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};

export default buttonType;
