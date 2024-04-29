import { useState } from 'react';

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]:
        target.type === 'number' ? Number(target.value) : target.value,
    });
  };

  return [form, handleChange, setForm];
};
