import { type ReactNode } from 'react';
import styles from './CustomTabPanel.module.css';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={styles.WrapperTabPanel}>{children}</div>
      )}
    </div>
  );
};
