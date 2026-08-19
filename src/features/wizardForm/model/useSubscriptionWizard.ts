import { useActionState, useEffect, useState, startTransition } from 'react';
import { subscribeAction, initialState } from './form.actions';

export function useSubscriptionWizard() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    initialState,
  );

  useEffect(() => {
    if (state.error.email) {
      setEmailError(state.error.email);
    }
  }, [state.error.email]);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(null);
  };

  const handleReset = async () => {
    const formData = new FormData();
    formData.set('_reset', 'true');

    startTransition(() => {
      formAction(formData);
    });

    setEmail('');
    setStep(1);
    setEmailError(null);
  };

  return {
    step,
    email,
    emailError,
    isPending,
    state,
    handleNext,
    handleBack,
    handleEmailChange,
    handleReset,
    formAction,
  };
}
