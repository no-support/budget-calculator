import { useContext } from 'react';
import { EditDispatchContext, EditStateContext } from '../contexts/EditContext';

export function useEditState() {
  const editId = useContext(EditStateContext);
  return editId;
}
export function useEditDispatch() {
  const setEditId = useContext(EditDispatchContext);
  if (!setEditId) throw new Error('유효하지 않습니다');
  return setEditId;
}
