import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: Props) => (
  <button className={styles.button} {...props}></button>
)

export default Button
