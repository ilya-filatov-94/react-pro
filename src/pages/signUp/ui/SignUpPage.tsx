import type { FC } from 'react';
import { SignUpForm } from 'features/signUp';
import styles from './SignUpPage.module.css';

const SignUp: FC = () => {
  return (
    <div className={styles.WrapperPage}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
