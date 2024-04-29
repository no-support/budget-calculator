import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AlertStateContext = createContext(null);
export const AlertDispatchContext = createContext(null);

const AlertContext = ({ children }) => {
  const [alert, setAlert] = useState({
    message: '',
    state: '',
  });
  return (
    <AlertStateContext.Provider value={alert}>
      <AlertDispatchContext.Provider value={setAlert}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
};

AlertContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertContext;
