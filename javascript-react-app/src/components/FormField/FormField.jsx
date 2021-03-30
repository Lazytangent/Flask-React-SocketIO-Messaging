import React from 'react';
import styles from './FormField.module.css';

const FormField = ({ className, type, name, placeholder, required, value, onChange }) => {
  if (required) {
    return (
    <>
      <input className={`${className ? className : ''} ${styles.input}`}required type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </>
    );
  } else {
    return (
      <>
        <input className={`${className ? className : ''} ${styles.input}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
      </>
    );
  }
};

export default FormField;
