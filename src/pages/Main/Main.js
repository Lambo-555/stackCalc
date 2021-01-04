import React, {useState, useEffect, useRef} from 'react';
import styles from './main.module.scss';
import {Button} from '../../components/Components'

const Main = () => {
  const [stack, setStack] = useState([]);
  const [total, setTotal] = useState(0);
  const [numStack, setNumStack] = useState([]);
  const screenRef = useRef();
  // adding new operations
  const mathOps = ['*', '/', '+', '-'];
  const inputOps = ['c'];
  // create or change scheme fast
  const buttonScheme = [
    [...inputOps, ...mathOps],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
  ];

  //scroll logic
  useEffect(() => {
    if(screenRef.current.scrollHeight > screenRef.current.scrollTop) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [stack]);
  // "total" logic
  useEffect(() => {
    // stack stage checker + numStack checker
    if (stack.length % 2 === 0 && numStack.length !== 0) {
      let prev = null;
      for (let i = 0; i < stack.length; i++) {
        //numbers
        if (i % 2 === 0) {
          if (!prev) prev = stack[i];
        }
        //operations
        if (i % 2 !== 0) {
          switch (stack[i]) {
            case '+':
              prev = prev + (stack[i + 1] || +numStack.join(''));
              break;
            case '-':
              prev = prev - (stack[i + 1] || +numStack.join(''));
              break;
            case '/':
              prev = Math.round((prev / (stack[i + 1] || +numStack.join(''))) * 100) / 100;
              break;
            case '*':
              prev = prev * (stack[i + 1] || +numStack.join(''));
              break;
            default:
              break
          }
        }
      }
      setTotal(prev);
    }
  }, [numStack, stack]);

  // stack logic
  function stackHandler(char) {
    // inputOps -> clear
    if (char === 'c') {
      setStack([]);
      setNumStack([]);
      setTotal(0);
    }
    // chars separator
    if (mathOps.includes(char)) {
      if (numStack.length === 0) return;
      setStack([...stack, +numStack.join(''), char]);
      setNumStack([]);
    }
    //numbers
    if (typeof char === 'number') {
      setNumStack([...numStack, char]);
    }
  }

  // show all operations on screen
  const renderOps = stack.map((operation, index) =>
      //fixing error - zero hide effect
      operation || operation === 0
          ? <div
              className={[styles.ops, typeof operation !== 'number' && styles.ops__operator].join(' ')}
              key={index}>{operation}</div>
          : null);

  // render buttons table based on button schema
  const renderButtons = buttonScheme.map((row, index) => {
    return (
        <div className={styles.row} key={index}>
          {row.map((btn, i) => <Button key={index.toString() + i} data={{value: btn, action: stackHandler}}/>)}
        </div>
    )
  });

  return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.screen} ref={screenRef}>
            <div className={styles.ops__row}>
              {renderOps}
              {numStack.length !== 0
                  ? <div className={styles.ops}>{numStack.join('')}</div>
                  : null
              }


            </div>
            <div className={styles.total}>total: {total}</div>
          </div>
          {renderButtons}
        </div>
      </div>
  )
};

export default Main;