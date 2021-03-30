import React from 'react';
import styles from './Button.module.css';

const Button = ({ className, label }) => (
  <button className={`${className} ${styles.button}`}>
    {label}
  </button>
);

export default Button;
