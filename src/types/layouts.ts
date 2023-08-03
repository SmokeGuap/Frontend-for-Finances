import { ReactNode } from 'react';

type PagesLayout = {
  pageName: string;
  leftColumnChildren: ReactNode;
  rightColumnChildren: ReactNode;
};

export default PagesLayout;
