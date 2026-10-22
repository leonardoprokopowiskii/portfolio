import { ReactNode } from 'react';
import styles from './CodeWindow.module.css';

interface CodeWindowProps {
  filename: string;
  ariaLabel?: string;
  flat?: boolean;
  heroPadding?: boolean;
  children: ReactNode;
}

function FileBadge({ filename }: { filename: string }) {
  const ext = filename.split('.').pop()?.toLowerCase();

  if (ext === 'ts' || ext === 'tsx') {
    return (
      <span className={`${styles.fileIcon} ${styles.tsIcon}`} aria-hidden="true">
        TS
      </span>
    );
  }

  if (ext === 'html') {
    return (
      <span className={`${styles.fileIcon} ${styles.htmlIcon}`} aria-hidden="true">
        &lt;&gt;
      </span>
    );
  }

  if (ext === 'py') {
    return <i className={styles.pyDot} aria-hidden="true" />;
  }

  return <i className={styles.defaultDot} aria-hidden="true" />;
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
        <FileBadge filename={filename} />
        {filename}
      </div>
      <div className={`${styles.code} ${heroPadding ? styles.heroPadding : ''}`.trim()}>
        {children}
      </div>
    </div>
  );
}
