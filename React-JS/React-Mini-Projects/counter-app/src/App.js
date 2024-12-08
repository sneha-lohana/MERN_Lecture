import { useState } from "react";
import { Display } from "./Display";
import Button from "./Button";

export default function App(){
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
  