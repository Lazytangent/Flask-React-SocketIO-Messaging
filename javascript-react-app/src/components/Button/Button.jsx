import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ className, label }) => (
  <button type="submit" className={`${className} ${styles.button}`}>
    {label}
  </button>
);

Button.defaultProps = {
  className: '',
  label: 'Button',
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
