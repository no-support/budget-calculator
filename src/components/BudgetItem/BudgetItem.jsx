import styles from './BudgetItem.module.css';
import PropTypes from 'prop-types';
import { useEditDispatch } from '../../hooks/useEdit';
import { useBudgetDispatch } from '../../hooks/useBudget';

const BudgetItem = ({ budget: { id, title, amount } }) => {
  const setEditId = useEditDispatch();
  const dispatch = useBudgetDispatch();
  return (
    <li className={styles.budgetItem}>
      <div className={styles.budgetItem__title}>{title}</div>
      <div className={styles.budgetItem__amount}>{amount}</div>
      <div className={styles.budgetItem__controls}>
        <button
          onClick={() => {
            setEditId(id);
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'DELETEBUDGET',
              payload: { id: id },
            });
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

BudgetItem.propTypes = {
  budget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default BudgetItem;
