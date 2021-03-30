import styles from './Button.module.css';

const Button = ({ className }) => (
  <button className={`${className} ${styles.button}`}>
    {label}
  </button>
);

export default Button;
