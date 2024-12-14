import React from 'react'

export default function SearchUser() {

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text'/>
        <button>Search</button>
    </form>
  )
}
