import { ID_CONTAINER } from './consts';
import { type ToolTipPos, ToolTipPositions } from './TooltipPosition';

type Container = HTMLDivElement | null;

export const getTooltipContainer = () =>
  document.getElementById(ID_CONTAINER) as Container;

export const getTransform = (pos: ToolTipPos): string => {
  switch (pos) {
    case ToolTipPositions.Top:
      return 'translate(-50%, -100%)';
    case ToolTipPositions.Bottom:
      return 'translate(-50%, 0)';
    case ToolTipPositions.Left:
      return 'translate(-100%, -50%)';
    case ToolTipPositions.Right:
      return 'translate(0, -50%)';
    default:
      return 'translate(-50%, 0)';
  }
};
