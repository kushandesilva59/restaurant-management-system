import React from 'react'
import { useLocation } from "react-router-dom";

const Test = () => {
 const location = useLocation();
 const { user } = location.state || {}; // Access the passed data

 return (
   <div>
     <h1>Destination Page</h1>
     {user ? (
       <div>
         <p>Name: {user.name}</p>
         <p>Email: {user.email}</p>
       </div>
     ) : (
       <p>No data passed</p>
     )}
   </div>
 );
}

export default Test