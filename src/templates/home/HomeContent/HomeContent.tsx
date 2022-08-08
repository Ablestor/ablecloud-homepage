import { NamedExoticComponent, PropsWithChildren, ReactNode, memo } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { ActionCard, RowSummaryCard } from '@/components/common';
import { Container } from '@/components/layout';

import HomeContentItemGrid from './HomeContentItemGrid';

export interface HomeContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
}

const HomeContent = memo<PropsWithChildren<HomeContentProps>>(
  ({ title, description, className, children }) => {
    return (
      <section
        className={cls`md:display-none group relative flex w-full flex-col items-center pb-16 ${className}`}>
        <Container.PageWidth>
          <header className='flex flex-col items-center px-8 text-center'>
            {typeof title === 'string' ? <h2>{title}</h2> : title}
            {typeof description === 'string' ? (
              <p className='max-w-screen-md'>{description}</p>
            ) : (
              <div className='max-w-screen-md'>{description}</div>
            )}
          </header>

          {children}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<HomeContentProps>> & {
  ActionCard: typeof ActionCard;
  RowSummaryCard: typeof RowSummaryCard;
  ItemGrid: typeof HomeContentItemGrid;
};

HomeContent.displayName = 'HomeContent';

HomeContent.ActionCard = ActionCard;
HomeContent.RowSummaryCard = RowSummaryCard;
HomeContent.ItemGrid = HomeContentItemGrid;

export default HomeContent;
