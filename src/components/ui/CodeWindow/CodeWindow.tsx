import { ReactNode } from 'react';
import styles from './CodeWindow.module.css';

interface CodeWindowProps {
  filename: string;
  ariaLabel?: string;
  flat?: boolean;
  heroPadding?: boolean;
  children: ReactNode;
}

export function CodeWindow({
  filename,
  ariaLabel,
  flat = false,
  heroPadding = false,
  children,
}: CodeWindowProps) {
  return (
    <div
      className={`${styles.win} ${flat ? styles.flat : ''}`.trim()}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
    >
      <div className={styles.top}>
        <i />
        {filename}
      </div>
      <div className={`${styles.code} ${heroPadding ? styles.heroPadding : ''}`.trim()}>
        {children}
      </div>
    </div>
  );
}
