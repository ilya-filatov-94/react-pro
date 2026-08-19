import type { FC } from 'react';
import { WizardForm } from 'features/wizardForm';
import styles from './WizardFormPage.module.css';

const WizardFormPage: FC = () => {
  return (
    <div className={styles.WrapperPage}>
      <WizardForm />
    </div>
  );
};

export default WizardFormPage;
