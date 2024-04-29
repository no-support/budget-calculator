import styles from './Form.module.css';
import Button from '../Button/Button';
import { useEffect, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { useBudgetDispatch, useBudgetState } from '../../hooks/useBudget';
import { useAlertDispatch } from '../../hooks/useAlert';
import { useEditDispatch, useEditState } from '../../hooks/useEdit';

const Form = () => {
  const editId = useEditState();
  const setEditId = useEditDispatch();
  const budgets = useBudgetState();

  const nextId = useRef(3);
  const [form, handleChange, setForm] = useForm({
    id: nextId.current,
    title: '',
    amount: 0,
  });

  useEffect(() => {
    if (editId !== null) {
      const target = budgets.find((budget) => budget.id === editId);
      if (target) {
        setForm(target);
      }
    }
  }, [editId, budgets, setForm]);

  const dispatch = useBudgetDispatch();
  const setAlert = useAlertDispatch();

  return (
    <div className={styles.form}>
      <div className={styles.form__label}>
        <label htmlFor="title">지출 항목</label>
        <label htmlFor="amount">비용</label>
      </div>
      <div className={styles.form__input}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="예) 렌트비"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder={0}
          value={form.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          message={editId ? '수정' : '제출'}
          onClick={() => {
            if (editId === null) {
              dispatch({
                type: 'ADDBUDGET',
                payload: { ...form },
              });
              setForm({ id: ++nextId.current, title: '', amount: 0 });
              setAlert({
                message: '아이템이 생성되었습니다.',
                state: 'success',
              });
            } else if (editId !== null) {
              dispatch({
                type: 'EDITBUDGET',
                payload: form,
              });
              setForm({ id: nextId.current, title: '', amount: 0 });
              setEditId(null);
              setAlert({
                message: '아이템이 수정되었습니다.',
                state: 'success',
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default Form;
