import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'white' | 'outlineLight';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

const variantClass: Record<Variant, string> = {
  primary: styles.pri,
  secondary: styles.sec,
  white: styles.white,
  outlineLight: styles.outlineLight,
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', ...rest } = props;
  const classes = `${styles.btn} ${variantClass[variant]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorRest} href={props.href}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
