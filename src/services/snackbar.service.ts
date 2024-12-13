import { PopupType } from '../enums/popupType.enum';
import { showSnackbar as snackbarHandler } from '../components/util/snackbar';

export const showSnackbar = (text: string, type: PopupType) => {
  if (snackbarHandler) {
    snackbarHandler(text, type);
  } else {
    console.error('Snackbar handler is not registered');
  }
};