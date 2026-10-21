import styles from './ScrollProgress.module.css';

interface ScrollProgressProps {
  progress: number;
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div
      className={styles.prog}
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}
