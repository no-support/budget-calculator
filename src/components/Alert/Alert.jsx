import styles from './Alert.module.css';
import PropTypes from 'prop-types';

const Alert = ({ message = '', state = 'success' }) => {
  return (
    <div className={state === 'success' ? styles.success : styles.warn}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Alert;
