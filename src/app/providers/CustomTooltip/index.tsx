import type { ComponentType } from 'react';
import { TooltipContainer } from 'shared/ui/tooltip';

export const withTooltip = (WrappedComponent: ComponentType) => {
  const TooltipProvider = (props: any) => (
    <>
      <WrappedComponent {...props} />
      <TooltipContainer />
    </>
  );

  TooltipProvider.displayName = 'TooltipProvider';
  return TooltipProvider;
};
