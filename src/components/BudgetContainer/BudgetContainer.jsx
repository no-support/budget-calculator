import styles from './BudgetContainer.module.css';
import { useBudgetDispatch, useBudgetState } from '../../hooks/useBudget';
import { useAlertDispatch } from '../../hooks/useAlert';
import BudgetItem from '../BudgetItem/BudgetItem';
import Form from '../Form/Form';
import Button from '../Button/Button';

const BudgetContainer = () => {
  const budgets = useBudgetState();
  const dispatch = useBudgetDispatch();
  const setAlert = useAlertDispatch();
  return (
    <div className={styles.budgetContainer}>
      <Form />
      <ol className={styles.budgetItemContainer}>
        {budgets &&
          budgets.map((budget) => {
            return <BudgetItem key={budget.id} budget={budget} />;
          })}
      </ol>
      <div>
        <Button
          message="목록 지우기"
          onClick={() => {
            dispatch({
              type: 'RESET',
            });
            setAlert({
              message: '모든 아이템이 삭제되었습니다.',
              state: 'warn',
            });
          }}
        />
      </div>
    </div>
  );
};

export default BudgetContainer;
