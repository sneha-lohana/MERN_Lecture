import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Button(props){
  // Keep the handleClick we will need it
  const handleClick = () => {props.onIncrement();}
  // instead of counter add +1. 
  return <button onClick={handleClick}>+1</button>
}
// function Display(props){
//   console.log(props);
//   return <div>{props.message}</div>
// }

function Display({message}){
  return <div>{message}</div>
}

function App(){
  const [counter, setCounter] = useState(0)
  const increamentCounter = () => {
    setCounter(counter+1);
  }
  return(
  <>
    <Button onIncrement={increamentCounter}/>
    <Display message={counter} val="React"/>
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render([<Button />, <Display />]);
// root.render(<Display/>);

// root.render(
//   <div>
//     <Button/>
//     <Display/>
//   </div>
// )

// root.render(
//   <React.Fragment>
//     <Button/>
//     <Display/>
//   </React.Fragment>
// )

// root.render(
//   <>
//     <Button/>
//     <Display/>
//   </>
// )

root.render(<App />);