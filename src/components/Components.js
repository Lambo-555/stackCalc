import styles from './components.module.scss';
import SoundFX from '../utils/soundEffects';
import React, {useRef} from 'react';

export function Button (props) {
  const btnRef = useRef();
  const clickHandler = () => {
    SoundFX.play();
    btnRef.current.classList.add(styles.button_pressed);
    setTimeout(()=>{
      btnRef.current.classList.remove(styles.button_pressed);
    }, 250);
    props.data.action(props.data.value);
  };
  return (
      <button
          ref={btnRef}
          className={styles.button}
          onClick={clickHandler}
      >{props.data.value}</button>
  )
}

