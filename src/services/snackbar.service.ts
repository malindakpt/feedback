import { PopupType } from '../enums/popupType.enum';

let snackbarHandler: ((text: string, type: PopupType) => void) | null = null;

export const showSnackbar = (text: string, type: PopupType) => {
  if (snackbarHandler) {
    snackbarHandler(text, type);
  } else {
    console.error('Snackbar handler is not registered');
  }
};

export const registerSnackbarHandler = (
  handler: (text: string, type: PopupType) => void
) => {
  snackbarHandler = handler;
};