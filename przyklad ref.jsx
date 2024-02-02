import React, { useRef, useState } from 'react';

export default function App() {
  const inputRef = useRef();
  const counterRef = useRef(1);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    console.log(counterRef);
    counterRef.current += 1;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>
        Focus on input - {counterRef.current}
      </button>
    </form>
  );
}
