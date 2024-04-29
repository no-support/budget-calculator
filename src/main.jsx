import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import BudgetContext from './contexts/BudgetContext.jsx';
import AlertContext from './contexts/AlertContext.jsx';
import EditContext from './contexts/EditContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetContext>
      <AlertContext>
        <EditContext>
          <App />
        </EditContext>
      </AlertContext>
    </BudgetContext>
  </React.StrictMode>
);
