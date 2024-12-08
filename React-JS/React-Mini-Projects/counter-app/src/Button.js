export default function Button(props){
    const handleClick = () => {props.onIncrement();}
    return <button onClick={handleClick}>+1</button>
  }
  