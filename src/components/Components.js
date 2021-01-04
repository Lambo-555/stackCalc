import styles from './components.module.scss';

export function Button (props) {
  return (
      <button
          className={styles.button}
          onClick={() => props.data.action(props.data.value)}
      >{props.data.value}</button>
  )
}

export function Input (props) {
  return (
      <button
          className={styles.button}
          onClick={props.data.action}
      >{props.data.value}</button>
  )
}

