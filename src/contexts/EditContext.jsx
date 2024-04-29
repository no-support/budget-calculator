import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EditStateContext = createContext(null);
export const EditDispatchContext = createContext(null);

const EditContext = ({ children }) => {
  const [editId, setEditId] = useState(null);
  return (
    <EditStateContext.Provider value={editId}>
      <EditDispatchContext.Provider value={setEditId}>
        {children}
      </EditDispatchContext.Provider>
    </EditStateContext.Provider>
  );
};

EditContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditContext;
