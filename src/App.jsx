import './App.css';
import { useAlertState } from './hooks/useAlert';
import { useBudgetState } from './hooks/useBudget';
import Alert from './components/Alert/Alert';
import BudgetContainer from './components/BudgetContainer/BudgetContainer';

function App() {
  const budgets = useBudgetState();
  const total =
    budgets && budgets.reduce((acc, current) => acc + current.amount, 0);
  const { message, state } = useAlertState();

  return (
    <div>
      {message && state && <Alert message={message} state={state} />}
      <h1>예산 계산기</h1>
      <BudgetContainer />
      <div className="total">총 지출: {total}원</div>
    </div>
  );
}

export default App;
