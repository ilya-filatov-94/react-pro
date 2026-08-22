export const ToolTipPositions = {
  Top: 'top',
  Bottom: 'bottom',
  Left: 'left',
  Right: 'right',
} as const;

export type ToolTipPos =
  (typeof ToolTipPositions)[keyof typeof ToolTipPositions];
