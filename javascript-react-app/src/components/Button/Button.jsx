import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ className, label, onClick }) => (
  <button type="submit" onClick={onClick} className={`${className} ${styles.button}`}>
    {label}
  </button>
);

Button.defaultProps = {
  className: '',
  label: 'Button',
  onClick: () => null,
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
