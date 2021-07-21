import React, { useState } from 'react';


const UseStateObject = () => {

  const[person,setPerson] = useState({name:'Abhishek',age:24,message:"Good Evening"});

  return (
        <>
          <h2>{person.name}</h2>;
        <h2>{person.age}</h2>;
        <h2>{person.message}</h2>;
        </>
        );
};

export default UseStateObject;
