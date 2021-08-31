import css from './Alert.module.css';
import PropTypes from 'prop-types';

export const Alert = ({ text, type = 'success' }) => {
  return (
    // <p role="alert" className={`${css.alert} ${css[type]}`}>
    <p role="alert" className={css[type]}>
      {text}
    </p>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};
