import React, { useRef, useState } from 'react'

export default function SearchUser(props) {
  // const username = useRef("Sneha");
  const [username, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(username);
    // console.log(event);
    // console.log(username);
    // console.log(username.current.value)
  }
  
  const handleChange = (event) => {
    setUserName(event.target.value);
    // console.log(event.target.value);
  }
  // console.log("render");
  
  return (
    <form onSubmit={handleSubmit}>
        {/* <input type='text' ref={username}/> */}
        <input type='text' value={username} onChange={handleChange}/>
        <button>Search</button>
    </form>
  )
}
