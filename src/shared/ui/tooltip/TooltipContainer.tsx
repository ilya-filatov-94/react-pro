import { type ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { ID_CONTAINER } from './consts';

export const TooltipContainer = (): ReactPortal => {
  return createPortal(<div id={ID_CONTAINER} />, document.body);
};
