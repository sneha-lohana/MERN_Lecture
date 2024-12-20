import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div>
        {/* <h1>Oops!</h1>
        <p>Some Error Occurred!</p> */}
        <h1>{error.status}</h1>
        <p>{error.error.message}</p>
        <p>{error.data}</p>
    </div>
  )
}
