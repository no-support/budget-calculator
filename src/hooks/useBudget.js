import { useContext } from 'react';
import {
  BudgetDispatchContext,
  BudgetStateContext,
} from '../contexts/BudgetContext';

export function useBudgetState() {
  const state = useContext(BudgetStateContext);
  return state;
}
export function useBudgetDispatch() {
  const dispatch = useContext(BudgetDispatchContext);
  if (!dispatch) throw new Error('유효하지 않습니다');

  return dispatch;
}
