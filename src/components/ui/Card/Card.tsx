import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { useCardSpotlight } from '../../../hooks/useCardSpotlight';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div';
  interactive?: boolean;
  reveal?: boolean;
  delay?: string;
  accentColor?: string;
  children: ReactNode;
}

export function Card({
  as: Tag = 'article',
  interactive = true,
  reveal = true,
  delay,
  accentColor,
  className = '',
  style,
  children,
  ...rest
}: CardProps) {
  const { onPointerMove } = useCardSpotlight<HTMLElement>();

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay ? ({ '--d': delay } as CSSProperties) : {}),
    ...(accentColor ? ({ '--c': accentColor } as CSSProperties) : {}),
  };

  const classes = [
    styles.card,
    interactive ? styles.interactive : '',
    reveal ? 'rv' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={classes}
      style={mergedStyle}
      onPointerMove={interactive ? onPointerMove : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
