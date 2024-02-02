import React, { useState } from 'react';

function Child() {
  const [first, setFirst] = useState('');
  return <div></div>;
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('bob');
  const [tab, setTab] = useState([1, 2, 3]);
  const [user, setUser] = useState({
    name: 'Joe',
    age: 99,
  });

  const handleIncrement = () => {
    // setCounter(10);
    setCounter(prev => prev + 1);
    setName('ALa');
    setTab(prev => [...prev, 4]);
    // setUser({
    //   name: "Michael",
    //   age: 66,
    // });
    setUser(prev => {
      return {
        age: 66,
      };
    });
  };

  return (
    <div>
      App - {counter} - {name}
      <button onClick={handleIncrement}>Increment</button>
      {tab}
      <h1>
        {user.name} - {user.age}
      </h1>
    </div>
  );
}

// class AppClass extends Component {
//   state = {
//     counter: 0,
// name: 'bob'
//   };
//   handleIncrement = () => {
//     // this.setState({
//     //   counter: 10
//     // });
//     this.setState((prev) => {
//       return {
//         counter: prev.counter + 1,
//       };
//     });
//   };
//   render() {
//     return <div>App</div>;
//   }
// }
