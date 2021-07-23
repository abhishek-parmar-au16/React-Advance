import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [IsLoading ,setLoading]= useState(true);
  const [IsError ,setIsError]= useState(false);
  const [user , setUser]= useState("Default value");

  useEffect(()=>{
    fetch(url)
    .then((resp) => {
      if (resp.json >=200 && resp.status <= 299){
        return resp.json();
      }
      else{
        setLoading(false);
        setIsError(true);
        throw new Error (resp.statusText);
      }
    })
    .then((user) => {
      const {login} =user;
      setUser(login);
      setLoading(false);
    })
    .catch((error) =>console.log(error));
  },[]);


  if(IsLoading){
    return (
      <div>
          <h4>Loading...</h4>     
      </div>
    )
  }

  if (IsError){
    return (
      <div>
          <h4>Error........</h4>     
      </div>
    )
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
