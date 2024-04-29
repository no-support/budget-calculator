import { useContext } from 'react';
import {
  AlertDispatchContext,
  AlertStateContext,
} from '../contexts/AlertContext';

export function useAlertState() {
  const alert = useContext(AlertStateContext);
  return alert;
}
export function useAlertDispatch() {
  const setAlert = useContext(AlertDispatchContext);
  if (!setAlert) throw new Error('유효하지 않습니다');

  return setAlert;
}
