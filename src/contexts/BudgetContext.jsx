import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const BudgetStateContext = createContext(null);
export const BudgetDispatchContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'ADDBUDGET':
      return [...state, action.payload];
    case 'EDITBUDGET':
      return state.map((budget) => {
        if (budget.id === action.payload.id) {
          return {
            ...budget,
            ...action.payload,
          };
        }
        return budget;
      });
    case 'DELETEBUDGET':
      return state.filter((budget) => budget.id !== action.payload.id);
    case 'RESET':
      return [];
    default:
      return state;
  }
}

const initialBudgets = [
  { id: 0, title: '렌트비', amount: 2000 },
  { id: 1, title: '교통비', amount: 400 },
  { id: 2, title: '식비', amount: 1200 },
];

const BudgetContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialBudgets);

  return (
    <BudgetStateContext.Provider value={state}>
      <BudgetDispatchContext.Provider value={dispatch}>
        {children}
      </BudgetDispatchContext.Provider>
    </BudgetStateContext.Provider>
  );
};

BudgetContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BudgetContext;
