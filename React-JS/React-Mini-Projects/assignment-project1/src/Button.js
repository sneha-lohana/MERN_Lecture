export default function Button(props){
    const handleClick = () => {props.onIncrement(props.incrementValue);}
    return <button onClick={handleClick}>{props.incrementValue>0 ? "+":""}{props.incrementValue}</button>
  }
  