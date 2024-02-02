import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect: on mount and every state change");
  // }); NIGDY

  useEffect(() => {
    console.log('On mount');
    if (localStorage.getItem('counter')) {
      setCounter2(localStorage.getItem('counter'));
    }
  }, []);

  useEffect(() => {
    console.log('On mount and counter change');
  }, [counter]);

  useEffect(() => {
    console.log('On mount and counter2 change');
    localStorage.setItem('counter', counter2);
  }, [counter2]);

  useEffect(() => {
    console.log('On mount and counter and counter2 change');
  }, [counter, counter2]);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };
  const handleIncrement2 = () => {
    setCounter2(prev => prev + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment - {counter}</button>
      <button onClick={handleIncrement2}>Increment2 - {counter2}</button>
    </div>
  );
}
