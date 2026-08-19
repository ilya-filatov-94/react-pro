import type { ComponentType } from 'react';
import { ThemeProvider } from 'shared/lib/ThemeContext';

export const withTheme = (WrappedComponent: ComponentType) => {
  const ThmProvider = (props: any) => (
    <ThemeProvider>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );

  ThmProvider.displayName = 'ThemeProvider';
  return ThmProvider;
};
