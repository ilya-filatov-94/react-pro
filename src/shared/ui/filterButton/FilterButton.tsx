import type {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import styles from './FilterButton.module.css';

interface FilterButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode;
  addClass?: string;
}

export const FilterButton: FC<FilterButtonProps> = ({
  children,
  addClass,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        addClass ? `${styles.FilterButton} ${addClass}` : styles.FilterButton
      }
    >
      {children}
    </button>
  );
};
