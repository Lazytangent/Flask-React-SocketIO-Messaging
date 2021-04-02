import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.css';

const FormField = ({
  className,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
}) => {
  if (required) {
    return (
      <div className={styles.formDiv}>
        <input
          className={`${className || ''} ${styles.input}`}
          required
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  return (
    <div className={styles.formDiv}>
      <input
        className={`${className || ''} ${styles.input}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormField.defaultProps = {
  className: '',
  type: 'text',
  name: 'default',
  placeholder: 'Default Input Field',
  required: false,
  value: '',
  onChange: () => null,
};

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

export default FormField;
