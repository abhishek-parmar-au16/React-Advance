import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text ,setText] = useState('')

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
        
        <h1>{text || 'Abhishek parmar'}</h1>
        {text && <h1>hello dear</h1>}
  </>
};

export default ShortCircuit;
