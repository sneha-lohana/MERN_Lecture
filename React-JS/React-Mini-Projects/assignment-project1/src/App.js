import Button from './Button';
import { Display } from './Display';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0)
    const increamentCounter = (value) => {
      setCounter(counter+value);
    } 
    return(
    <>
      {/* Three buttons */}
      <Button onIncrement={increamentCounter} incrementValue={-1}/>
      <Button onIncrement={increamentCounter} incrementValue={+1}/>
      <Button onIncrement={increamentCounter} incrementValue={+5}/>
      <Button onIncrement={increamentCounter} incrementValue={+10}/>
      <Display message={counter} val="React"/>
    </>
    );
}

export default App;
