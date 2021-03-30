import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormErrors.module.css';

const FormErrors = ({ errors }) => (
  <ul className={styles.ul}>
    {errors.map((err) => <li>{err}</li>)}
  </ul>
);

FormErrors.defaultProps = {
  errors: [],
};

FormErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default FormErrors;
