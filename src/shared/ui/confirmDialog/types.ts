export type ConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export type ShowConfirmDialogOptions = {
  title: string;
  description?: string;
};
