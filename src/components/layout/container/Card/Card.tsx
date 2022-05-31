import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

interface CardProps extends BaseComponentProps {
  hoverBehavoir?: 'none' | 'scale';
}

export function Card({
  hoverBehavoir = 'scale',
  className,
  children,
}: PropsWithChildren<CardProps>) {
  const hoverStyle = cls`${{
    'transition-all hover:-translate-y-1 hover:scale-102 hover:shadow-xl':
      hoverBehavoir === 'scale',
  }}`;

  return (
    <section
      className={cls`overflow-hidden rounded-md bg-white shadow-md ${hoverStyle} ${className}`}>
      {children}
    </section>
  );
}
