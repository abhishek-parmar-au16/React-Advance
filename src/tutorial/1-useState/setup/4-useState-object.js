import React, { useState } from 'react';


const UseStateObject = () => {

  // const[person,setPerson] = useState({name:'Abhishek',age:24,message:"Good Evening"});

  const[name ,setName] = useState('loki');
  const[age ,setAge] = useState(56);
  const[message ,setMessage] = useState('wake up sid')

  const onChange = ()=>{
    // setPerson({...person,message:"hello dear"})
    setMessage(" Do Exercise")
  }

  return (
        <>
        <h2>{age}</h2>;
        <h2>{name}</h2>;
        <h2>{message}</h2>;
        <button className="btn" onClick={onChange}>Change here</button>
        </>
        );
};

export default UseStateObject;
