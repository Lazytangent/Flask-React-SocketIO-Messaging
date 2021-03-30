import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormHeader.module.css';

const FormHeader = ({ heading, className }) => (
  <div className={`${className} ${styles.headingContainer}`}>
    <h3>{heading}</h3>
  </div>
);

FormHeader.defaultProps = {
  heading: 'Default Heading',
  className: '',
};

FormHeader.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
};

export default FormHeader;
