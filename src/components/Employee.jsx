import React from 'react';

const Employee =(props)=>{
    console.log(props);
    return (
     <>
    <h1>This is an employee{props.FirstName}</h1>
    <h2>Employee{props.lastName}</h2>
     </>
    ) 
}
export default Employee