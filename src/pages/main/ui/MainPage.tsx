import { type FC } from 'react';
import { Typography } from '@mui/material';
import styles from './MainPage.module.css';

const MainPage: FC = () => {
  return (
    <div className={styles.WrapperPage}>
      <Typography>Main page</Typography>
    </div>
  );
};

export default MainPage;
