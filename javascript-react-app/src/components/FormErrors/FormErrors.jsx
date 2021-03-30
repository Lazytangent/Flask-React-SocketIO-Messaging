import React from 'react';

import styles from './FormErrors.module.css';

const FormErrors = ({ errors }) => (
  <ul className={styles.ul}>
    {errors.map(err => <li>{err}</li>)}
  </ul>
);

export default FormErrors;
