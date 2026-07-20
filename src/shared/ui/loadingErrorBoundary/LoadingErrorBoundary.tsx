import type { ReactNode } from 'react';
import { getErrorMessage } from 'shared/lib/getErrorMessage';
import styles from './LoadingErrorBoundary.module.css';

interface LoadingErrorBoundaryProps {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  children: ReactNode;
  loadingText?: string;
}

export const LoadingErrorBoundary = ({
  isLoading,
  isError,
  error,
  children,
  loadingText = 'Пожалуйста, подождите',
}: LoadingErrorBoundaryProps) => {
  if (isLoading) {
    return (
      <div className={styles.WrapperMessage}>
        <p className={styles.textLoader}>{loadingText}</p>
        <i className={styles.loaderCircle} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.WrapperMessage}>
        <p className={`${styles.textLoader} ${styles.textError} `}>
          {getErrorMessage(error)}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
