import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// function addCounter(){
//   console.log(Math.random());
// }

function Button(){
  // let counter=0;
  // return <button onClick={addCounter}>Button clicked for {counter} times</button>

  // Anonyomous function
  // return <button onClick={function() {
  //   console.log(Math.random());
  // }}>Button clicked for {counter} times</button>

  // Arrow function
  // return <button onClick={()=>console.log(Math.random())}>
  //   Button clicked for {counter} times</button>

  // You will see this anonymous or arrow functions are commonly used 
  // to reduce the number of lines of code in ReactJS

  // let counter=0;
  // const setCounter = () => {
  //   counter=counter+1;
  //   console.log(counter);
  // }

  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter+1);
  }
  // console.log("render");
  return <button onClick={handleClick}>Button clicked for {counter} times</button>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div>Hello</div>);
root.render(<Button />);
