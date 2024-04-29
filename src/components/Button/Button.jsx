import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ message, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {message}
    </button>
  );
};

Button.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
