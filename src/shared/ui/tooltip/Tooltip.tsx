import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getTooltipContainer, getTransform } from './utils';
import { useTheme } from 'shared/lib/ThemeContext';
import { type ToolTipPos, ToolTipPositions } from './TooltipPosition';
import styles from './Tooltip.module.css';

type TooltipProps = {
  position: ToolTipPos;
  content: ReactNode;
  children: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ position, content, children }) => {
  const { theme } = useTheme();
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const container = getTooltipContainer();
    setContainer(container);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const showTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    let top = 0,
      left = 0;
    switch (position) {
      case ToolTipPositions.Top:
        top = rect.top - 8;
        left = rect.left + rect.width / 2;
        break;
      case ToolTipPositions.Bottom:
        top = rect.bottom + 8;
        left = rect.left + rect.width / 2;
        break;
      case ToolTipPositions.Left:
        top = rect.top + rect.height / 2;
        left = rect.left - 8;
        break;
      case ToolTipPositions.Right:
        top = rect.top + rect.height / 2;
        left = rect.right + 8;
        break;
    }
    setCoords({ top, left });
    setVisible(true);
  };

  const scheduleHide = () => {
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const cancelHide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  if (!container) return <>{children}</>;

  return (
    <>
      <span
        ref={wrapperRef}
        className={styles.wrapperText}
        onMouseEnter={showTooltip}
        onMouseLeave={scheduleHide}
      >
        {children}
      </span>

      {visible &&
        createPortal(
          <div
            className={`${styles.tooltip} ${theme === 'dark' ? styles['tooltip--dark'] : ''}`}
            style={{
              top: coords.top,
              left: coords.left,
              transform: getTransform(position),
            }}
            onMouseEnter={cancelHide}
            onMouseLeave={() => setVisible(false)}
          >
            {content}
          </div>,
          container,
        )}
    </>
  );
};
