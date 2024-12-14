import React from 'react'

export default function SearchUser() {

    const handleSubmit = () => {
        console.log("handle submit");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text'/>
        <button>Search</button>
    </form>
  )
}
