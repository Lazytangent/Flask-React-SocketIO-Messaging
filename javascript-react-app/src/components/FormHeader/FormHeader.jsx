import React from 'react';

import styles from './FormHeader.module.css';

const FormHeader = ({ heading, className }) => (
  <div className={`${className} ${styles.headingContainer}`}>
    <h3>{heading}</h3>
  </div>
);

export default FormHeader;
