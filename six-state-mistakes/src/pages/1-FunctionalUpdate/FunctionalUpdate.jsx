import React, { useState } from 'react';
import './style.css';

const FunctionalUpdate = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber( number + 1);
    };

    const increaseAsync = () => {
        setTimeout(() => {
            setNumber( (prev) => prev+1);
        }, 2000);
    }

    return (
    <div className='main'>
        <h1>Counter</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>Increase Async</button>
        
        <div className="contador">{number}</div>


    </div>
  )
}

export default FunctionalUpdate