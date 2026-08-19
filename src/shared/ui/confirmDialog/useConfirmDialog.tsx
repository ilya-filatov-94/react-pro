import { useCallback, useRef, useState } from 'react';
import { ConfirmDialog } from './ConfirmDialog';
import { type ShowConfirmDialogOptions } from './types';

export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ShowConfirmDialogOptions>({
    title: '',
    description: '',
  });
  const resolverRef = useRef<((value: boolean) => void) | null>(null);

  const showConfirmDialog = useCallback(
    (dialogOptions: ShowConfirmDialogOptions) => {
      setOptions(dialogOptions);
      setIsOpen(true);
      return new Promise<boolean>(resolve => {
        resolverRef.current = resolve;
      });
    },
    [],
  );

  const handleConfirm = useCallback(() => {
    resolverRef.current?.(true);
    setIsOpen(false);
    resolverRef.current = null;
  }, []);

  const handleCancel = useCallback(() => {
    resolverRef.current?.(false);
    setIsOpen(false);
    resolverRef.current = null;
  }, []);

  const confirmDialog = (
    <ConfirmDialog
      isOpen={isOpen}
      title={options.title}
      description={options.description}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return { confirmDialog, showConfirmDialog };
}
