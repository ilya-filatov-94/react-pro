import { useActionState, useEffect, useState } from 'react';
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

  return {
    step,
    email,
    emailError,
    isPending,
    state,
    handleNext,
    handleBack,
    handleEmailChange,
    formAction,
  };
}
